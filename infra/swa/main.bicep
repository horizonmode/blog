param appName string

@description('Resource location.')
param location string = resourceGroup().location

@description('The SKU for the static site. https://docs.microsoft.com/en-us/azure/templates/microsoft.web/staticsites?tabs=bicep#skudescription')
param sku object = {
  name: 'Free'
  tier: 'Free'
}

@description('State indicating whether staging environments are allowed or not allowed for a static web app.')
param stagingEnvironmentPolicy string = 'Enabled'

resource staticSite 'Microsoft.Web/staticSites@2021-02-01' = {
  name: appName
  location: location
  sku: sku
  properties: {
    stagingEnvironmentPolicy: stagingEnvironmentPolicy
  }
}

output siteName string = staticSite.name
