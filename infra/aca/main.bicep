param environmentName string
param appName string
param appId string
param containerName string
param managedCertName string = ''
param customDomainName string = ''
param logAnalyticsWorkspaceName string = 'logs-${environmentName}'
param appInsightsName string = 'appins-${environmentName}'
param location string = resourceGroup().location
param containerRegistry string
@secure()
param containerRegistryUsername string
@secure()
param containerRegistryPassword string

resource logAnalyticsWorkspace 'Microsoft.OperationalInsights/workspaces@2020-03-01-preview' = {
  name: logAnalyticsWorkspaceName
  location: location
  properties: any({
    retentionInDays: 30
    features: {
      searchVersion: 1
    }
    sku: {
      name: 'PerGB2018'
    }
  })
}

resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: appInsightsName
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: logAnalyticsWorkspace.id
  }
}

// https://github.com/Azure/azure-rest-api-specs/blob/Microsoft.App-2022-03-01/specification/app/resource-manager/Microsoft.App/preview/2022-01-01-preview/ManagedEnvironments.json
resource environment 'Microsoft.App/managedEnvironments@2022-03-01' = {
  name: environmentName
  location: location
  properties: {
    daprAIInstrumentationKey: appInsights.properties.InstrumentationKey
    appLogsConfiguration: {
      destination: 'log-analytics'
      logAnalyticsConfiguration: {
        customerId: logAnalyticsWorkspace.properties.customerId
        sharedKey: logAnalyticsWorkspace.listKeys().primarySharedKey
      }
    }
  }
}

resource managedEnvironmentManagedCertificate 'Microsoft.App/managedEnvironments/managedCertificates@2022-11-01-preview' existing =
  if (managedCertName != '') {
    parent: environment
    name: managedCertName
  }

var customDomainSettings = managedCertName != '' && customDomainName != ''
  ? [
      {
        name: customDomainName
        certificateId: managedEnvironmentManagedCertificate.id
        bindingType: 'SniEnabled'
      }
    ]
  : []

// https://github.com/Azure/azure-rest-api-specs/blob/Microsoft.App-2022-01-01-preview/specification/app/resource-manager/Microsoft.App/preview/2022-01-01-preview/ContainerApps.json
resource containerApp 'Microsoft.App/containerApps@2022-03-01' = {
  name: appName
  location: location
  properties: {
    managedEnvironmentId: environment.id
    configuration: {
      ingress: {
        targetPort: 3000
        external: true
        customDomains: customDomainSettings
      }
      registries: [
        {
          server: containerRegistry
          username: containerRegistryUsername
          passwordSecretRef: 'container-registry-password'
        }
      ]
      secrets: [
        {
          name: 'container-registry-password'
          value: containerRegistryPassword
        }
      ]
      dapr: {
        enabled: false
        appId: appId
        appProtocol: 'http'
        appPort: 80
      }
    }
    template: {
      containers: [
        {
          image: containerName
          name: 'blog'
        }
      ]
    }
  }
}

output location string = location
output environmentId string = environment.id
