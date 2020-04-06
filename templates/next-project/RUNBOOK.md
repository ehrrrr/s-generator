# runbook.md

Populates one or more Biz Ops System records from the content of one or more runbook files (`/runbook.md$/i`) in a GitHub repository in response to either Github webhooks or change api change logs

## Code

biz-ops-runbook-md

## Primary URL

https://biz-ops.in.ft.com/runbook.md

## Service Tier

Bronze

## Lifecycle Stage

Production

## Host Platform

AWS

## Delivered By

reliability-engineering

## Supported By

reliability-engineering

## Known About By

-   rhys.evans
-   dora.militaru

## First Line Troubleshooting

Check runbook.md logs on [Splunk](https://financialtimes.splunkcloud.com/en-US/app/search/runbooksmd?form.field1.earliest=-60m%40m&form.field1.latest=now). This highlights all of the recent errors in production. Check if there is a recent build that failed using [CircleCI](https://circleci.com/gh/Financial-Times/runbook.md).

## More Information

Runbook.md is a toolchain used for improving the quality of runbooks across the business, and ensuring consistency of the information contained within runbooks with biz-ops – the knowledge base which models our business operations.
Contact [#reliability-eng](https://financialtimes.slack.com/archives/C07B3043U) on Slack for more information.

## Monitoring

Check runbook.md production logs avaible at [Splunk](https://financialtimes.splunkcloud.com/en-US/app/search/runbooksmd?form.field1.earliest=-60m%40m&form.field1.latest=now)

## Contains Personal Data

False

## Contains Sensitive Data

False

## Architecture

The user provides the content of a RUNBOOK.MD and its systemCode via a AWS Serverless Lambda GUI form (later to be an auto connection to the Change Request API) . On form submission control is passed to a second lambda which calls a runbook parser library, the SOS /Validate endpoint and, if successful, a PATCH request to Biz Ops REST API.
https://github.com/Financial-Times/runbook.md/raw/master/docs/changeApi_runbooks.md_workflow.png

## Failover Architecture Type

NotApplicable

## Failover Process Type

NotApplicable

## Failback Process Type

NotApplicable

## failoverDetails

NotApplicable

## Data Recovery Details

Runbook.md is only in one region.

## Release Process Type

FullyAutomated

## Rollback Process Type

PartiallyAutomated

## releaseDetails

System is released using CircleCI. To rollback find the last successfull release and rerun.

## Key Management Process Type

PartiallyAutomated

## Key Management Details

Keys are all stored in vault, and fetched automatically as part of the circleci build.