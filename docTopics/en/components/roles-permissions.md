## Roles & Permissions

One of the main methods of access control in computer systems is known as role-based access control (RBAC). Basically, it's about restricting access to a system depending on the person's role. Multiple roles are created to satisfy the need of different access level for different groups of people. As roles have different permissions, it is possible to limit specific tasks like viewing, creating, modifying, or sharing files.

Using roles and permissions is a common practice for big companies, but it's also particularly helpful for those who want to give access to a system to external people, like third-parties and contractors. Slingshot was designed with different roles and permissions that contemplate many possible scenarios.

### What are roles and permissions within Slingshot?

In Slingshot, users can join one or more workspaces, and can also be part of an Organization. 

Roles represent a set of permissions that a user has in a workspace or in the Organization. The role is assigned to the user when they join the workspace/Organization. There are three different roles in Slingshot - owner, member and viewer.
### How can I find my role?

You can have a different role in the different workspaces and the Org. Your role is given to you by the creator of a workspace at the moment you are invited. The creator is also the owner of the workspace. You will be notified what role they assigned to you in the invitation email. 

If you want to check your role in a workspace or the Org at a later moment, you can select the overflow menu of the workspace/Org > *Manage Members*. Find more about managing workspace members in the [More on Workspaces](teams-starting.html#how-can-i-manage-team-members) topic.

### But what is an Organization in Slingshot? 

Before you learn about the user roles and their permissions, you may want to know more about the Organization in Slingshot and how it concerns you. 

In its nature, the Organization, also called *the Org*, is a workspace, but not like any other workspace in Slingshot. There you can collaborate with other members of, well, your real life organization - business or non-profit. Your Organization workspace in Slingshot will appear right under _Home_ (see below).

> screenshot

To have an Organization workspace in Slingshot, you need to log in with your organization's email. The roles in the Slingshot Organization are the same as in other workspaces - owner, member, viewer. However, the permissions of these roles in the Organization are not the same. Learn more below. 

Having an Organization in Slingshot makes you a user with an Organization account or an **Org user**. If you use your personal email to log in Slingshot, then you are a **personal account user**. You will learn more about [personal account users](#personal-account-users) later in this topic.

Learn more about the Organization in the [Workspaces](workspaces.md) topic.

<a name="teams-projects-roles"></a>
### What can the different roles do in a workspace?

In the table below, you will find the permissions of each role in the workspace. 


| Permissions                                                          | Owner              | Member             | Viewer             |
| -------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| Can create and delete **workspaces**                                 | :white_check_mark: | :x:                | :x:                |
| Can create **sub-workspaces** under a workspace                      | :white_check_mark: | :white_check_mark: | :x:                |
| Can change **workspace information**                                 | :white_check_mark: | :x:                | :x:                |
| Can manage members of the **workspace**                              | :white_check_mark: | :x:                | :x:                |
| Can create, edit, delete **tasks**                                   | :white_check_mark: | :white_check_mark: | :x:                |
| Can create, edit, delete **task filters**                            | :white_check_mark: | :white_check_mark: | :x:                |
| Can create, rename, delete **discussions** and **topics**            | :white_check_mark: | :white_check_mark: | :x:                |
| Can send messages in **topics**                                      | :white_check_mark: | :white_check_mark: | :x:                |
| Can create, rename, delete **boards**                                | :white_check_mark: | :white_check_mark: | :x:                |
| Can pin/unpin content to **boards**                                  | :white_check_mark: | :white_check_mark: | :x:                |
| Can view **Analytics dashboards**                                    | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Can create, edit and share **Analytics dashboards**                  | :white_check_mark: | :white_check_mark: | :x:                |
| Can export **Analytics dashboards**                                  | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Can **bookmark** tasks, discussions, topics, content, analytics      | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Can **copy a link** to a task, discussion, topic, content, analytics | :white_check_mark: | :white_check_mark: | :white_check_mark: |

The Slingshot user who creates a workspace is automatically assigned as its **owner**. A workspace can have more than one owner. However, if you are the only owner of a workspace, you cannot leave it without assigning another member as an owner. 

**Owners** have full access to manage a workspace. This includes changing its main **information** - *name*, *description*, *privacy*, *status* and even deleting it. It also means owners have the right to **manage members** of the workspace - invite, remove and change their roles. They can create, edit and delete all content inside the workspace - tasks, filters, discussions, topics, boards, and Analytics dashboards.

**Members** are more limited than owners but they are allowed to create sub-workspaces under the workspace. They can also create, edit and delete tasks, filters, discussions, topics, boards, and Analytics dashboards. When [joining](teams-starting.html#how-can-I-discover-and-join-other-teams) a public workspace by yourself and not by invitation, you are assigned the member role by default.

**Viewers** are limited to view, bookmark and share content. To be a viewer in a workspace, you have to be invited with the viewer role.

>[!NOTE] Your permissions in a sub-workspaces are not affected by your role in the parent workspace. This means that even if you are an owner in the parent workspace, you can't have permissions exceeding your role in the sub-workspace. For example, if you are a member of the sub-workspace, you cannot delete it even if you are an owner of the workspace.

<a name="personal-account-users"></a>
### What about external users?

Sometimes you may need to work with people from outside of your team or even from outside the organization. People with expertise in many different areas can be mixed in a team that is not part of the organization. You can also create a project that includes tasks assigned to external users.

In Slingshot, people can be part of an organization, one or more teams, and also one or more projects. Teams normally live within organizations, and projects live within teams. That being said, you can create a team outside of your organization to mix in external users. Also, you can invite external users or people from other teams to any project. This is particularly useful when external users will work with you for a limited amount of time. All projects have a beginning and an end, after all, and you can assign tasks within a project to one or more external users.

So, what path should you take?

If you are thinking of a **small contribution**, you can go to a team and create a specific task for an external user. This user won't be added to the team and will receive a notification about the task assigned. For the external user, the task will appear in *Home > Tasks*.

> Change screenshot
<img src="../images/externalUser-task.png" alt="Showing a Task created for an external user" width="100%"/>

Alternatively, the external user might be **further involved into a specific project**. This way, the external user will collaborate in multiple tasks with other users. In this case, you should add the user to that specific project within the team. Again, the user won't be added to the team.

Finally, you might want to create a team to add an external user that **frequently collaborates with you and other organization members**. In this case, you should create a team outside your organization that includes the external user and other members.

### How do permissions around cloud storages work?

The content that is relevant to you might be stored in different cloud storages. Slingshot lets you create connections to those cloud storages to access that content, share it, and organize it in boards. Those connections can be private or shared and they are meant to be used in different scenarios.

_Only you_ have access to **private cloud storage** connections and you can create/delete them whenever you want. That being said, you are able to **share private content with others** if you want.
When you pin content from a private cloud storage to a team shared board, that specific content becomes available for the whole team. But it does not mean that team members can access the rest of the cloud storage contents.

_All the members of a team_ have access to **team cloud storage** connections and they can create/delete them whenever they want. You can also keep useful content at hand by pinning it to a team board.

> [!NOTE]
> If you use your **Office 365** account to log into Slingshot, you will start with your **OneDrive** configured. Same applies to logging with your **Google** account and starting with a **Google Drive**.


### What about public and private workspaces?

A newly created team is public by default, meaning that any member of the main organization can search and join the team. Trust and transparency are key elements for effective collaboration, and also help with ownership and accountability.  
That being said, sometimes you might need to have a private team, leaving your team out of the search results. In this case, users can only join the team by getting invitations from existing members. This is helpful for teams that handle sensitive information, in those cases the organization wants to restrict access.

To change a team's privacy, you need to be one of the owners of the team. To do this, select your **team** > **overflow menu** next to team's name > **Team Settings** > **Information** > **Privacy**.

> Change screenshot
<img src="../images/access-team-settings.png" alt="Accessing team settings" width="100%"/>

Here you can also change your team's name and description. Click/tap **Update** when ready. 

