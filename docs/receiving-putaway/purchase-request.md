---
title: Purchase Request
sidebar_position: 3
---

# Issue Center

This feature allows users to report their issues to developers or their task to each employee that registered in this app. Also, allow users to interact with the reporter and assignee on the column form that has already provide in issue details.

:::important

Each issue will be received by the assignee, where each issue has already got an approved by the supervisor or the head of their division.

:::

Each issue has a each level of priority, the lowest priority is for the lowest issue, not really urgent for this time, but maybe this issue can be important in the future. And highest priority is for urgent needs that have to be fixed as soon as possible.

## Create an issue

Let's say that user want to report his issue to developer, user can create an issue from the `Create Issue` button that already provide on issue's banner.

![Create issue button](https://res.cloudinary.com/boxity-id/image/upload/r_10/v1628996258/docs/issue%20center/Screenshot_2021-08-15_at_09.57.22_king9o.png)

And when you click the button, it will direct to form issue, that already provide:
- Title
- Issue explanation
- Assignees
- Priority

![Issue create form](https://res.cloudinary.com/boxity-id/image/upload/r_10/v1628996351/docs/issue%20center/Screenshot_2021-08-15_at_09.59.06_rbqtx6.png)

You can fill your title main issue on `Title section`, write your issue explanation on `Issue explanation`, and choose the user that can handle your issue on `Assignees` section, and the last you can choose your priority from the lowest to the highest, it is up to your level of your issue.

And when you click `Submit` button, it will store to database, and your issue will shown at the `From You` section at the bottom of the Issue Center page.

![Your issue](https://res.cloudinary.com/boxity-id/image/upload/r_10/v1628996769/docs/issue%20center/Screenshot_2021-08-15_at_10.06.04_c7fnv0.png)

and user just wait for the approval of the head of divison or the supervisor on user's team. 

:::important
When your issue already got the approval, the assignees will receive user's issue and start to do the issue.
:::

## Issue Authorization
| **Role**           | **Ability**                                                                           |
| ------------------ | ------------------------------------------------------------------------------------- |
| Head      | Full Read/Write over all Issues, Auth for approve the issue reported |
| User       | Can make the issue, write and discuss the issue on issue reported                                             |
| HRD & GA | Can make the issue, write and discuss the issue on issue reported, also can approve the issue that have a related issue with this auth.                                        |

## Closed or done issue
User can see their issue closed by themself by clicking the `Issue Closed` on the top of the issue center's page.

![Closed issue](https://res.cloudinary.com/boxity-id/image/upload/r_10/v1628998308/docs/issue%20center/Screenshot_2021-08-15_at_10.31.20_hhilra.png)