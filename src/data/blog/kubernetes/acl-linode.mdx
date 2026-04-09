---
title: "Kubernetes API Errors Caused by Control Plane Exposure"
date: 2026-04-09
tags: ["kubernetes", "security", "incident", "ops"]
summary: "How unauthorised access to a Kubernetes control plane caused API instability—and how a simple ACL fix resolved it."
---

# When Your Kubernetes API Starts Failing: A Lesson in Control Plane Exposure

Recently, I ran into a cluster issue that, at first glance, looked like a fairly typical internal problem: intermittent Kubernetes API errors. Timeouts, failed requests, and general instability.

The kind of issue that usually sends you digging into:
- resource pressure
- misbehaving workloads
- logging or monitoring pipelines

It turned out to be none of those.

---

## The Symptoms

The cluster began showing signs of API instability:

- Intermittent request failures  
- Increased latency from the Kubernetes API  
- Errors appearing across multiple components  

At first, the suspicion fell on internal services. But nothing obvious stood out:

- Resource usage was within expected bounds  
- No clear spike in workload activity  
- No obvious misconfiguration  

---

## The Turning Point

After raising the issue with the provider, they reported:

> Unauthorised activity detected against the Kubernetes control plane.

That immediately reframed the problem.

This wasn’t an internal failure — it was external pressure on the API server.

---

## The Root Cause

The Kubernetes API endpoint was more exposed than it should have been.

That meant:
- External actors could reach the control plane  
- Requests (malicious or not) were hitting the API server  
- The control plane was under unnecessary load  

Even without successful authentication, this can:
- Increase latency  
- Trigger rate limiting  
- Cause intermittent failures for legitimate traffic  

In short: your cluster can degrade even if no one actually gets access.

---

## The Fix

The solution was straightforward:

**Restrict access to the Kubernetes API using IP-based ACLs.**

Only trusted sources were allowed:
- Admin networks  
- VPN endpoints  
- Known automation systems  

As soon as this was implemented:
- API errors stopped  
- Latency returned to normal  
- Cluster stability was restored  

---

## Why This Matters

Kubernetes makes it easy to expose the API server, especially in managed environments.

But “accessible” doesn’t mean “safe”.

If your control plane is reachable from the internet, you are:
- Increasing your attack surface  
- Allowing unnecessary traffic to hit critical components  
- Relying entirely on authentication as your first line of defence  

---

## Key Takeaways

### Lock Down the Control Plane

The Kubernetes API should not be broadly accessible unless absolutely required.

Use:
- IP allow lists (ACLs)  
- Private endpoints  
- VPN or bastion access  

---

### Don’t Assume Internal Causes

API instability doesn’t always originate inside the cluster.

Always consider:
- External traffic  
- Probing or scanning  
- Exposure misconfiguration  

---

### Authentication Isn’t Enough

Even failed requests consume resources.

Blocking traffic at the network layer is more effective than relying on:
- RBAC  
- Tokens  
- Authentication layers  

---

### Monitor Control Plane Access

Where possible, enable:
- API audit logs  
- Request rate monitoring  
- Connection metrics  

These provide early warning of unusual behaviour.

---

## A Simple Mental Model

Think of the Kubernetes API like SSH on a server.

You wouldn’t leave SSH open to the internet without restrictions—even with strong authentication.

The same principle applies here.

---

## Final Thoughts

This issue was a useful reminder:

Not all incidents originate from within your cluster.

Sometimes, the problem is simply that your control plane is too easy to reach.

Restricting access is low effort, high impact, and immediately effective.

If you haven’t reviewed your Kubernetes API exposure recently, now is a good time.
