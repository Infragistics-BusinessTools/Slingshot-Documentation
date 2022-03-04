# Security & Privacy

Slingshot takes your data security and data privacy seriously, encompassing every aspect of security from the physical hardware and access control to the logical security of the application. Hardware security plus data encryption at different states like data-at-rest, data in transit and temporary cached data are all key practices that ensure data protection across all platforms.

Built on top of Microsoft and Google, Slingshot inherits all the underlying security for data access and administration, including 2-factor authentication. In addition, Slingshot is fully GDPR compliant and is hosted on AWS to provide end-to-end security.

As a Slingshot user you own the different types of content you create. Such as the files you upload, the messages you write and the dashboards you create. All of those are part of your Slingshot account and are associated with you as a user.

Enterprise only features include:
•	Admin security – Manage who is part of your organization.
•	Data residency - Enterprises can request where their data is stored – Europe / America / Japan 

## Roles And Permissions
Roles represent a set of permissions that a user has in a workspace, project or in the Organization. There are three different roles in Slingshot:
- **Owner** – Full access to create, edit, delete and share the workspaces/projects and its assets. 
- **Contributor** – Create, edit, delete and share only the assets of the workspace/project.
- **Viewer** -Restricted to view and share

To ensure sensitive business data remains secure, only an Owner can add or remove members. Of course, ownership can be granted to other workspace/project contributors trusted by the owner.

### User Roles Details
Using roles and permissions is a common practice between companies and it's also particularly helpful if you want to give access to external people, like third parties and contractors. Slingshot was designed with different roles and permissions that allow you full control over your organization, workspaces and projects.

In the table below, you will find the permissions of each role in the workspace. 


| Permissions                                                          | Owner              | Contributor             | Viewer             |
| -------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| Can create and delete **workspaces**                                 | :white_check_mark: | :x:                | :x:                |
| Can create **projects** under a workspace                      | :white_check_mark: | :white_check_mark: | :x:                |
| Can change **workspace information**                                 | :white_check_mark: | :x:                | :x:                |
| Can manage members of the **workspace**                              | :white_check_mark: | :x:                | :x:                |
| Can create, modify, delete **tasks**                                 | :white_check_mark: | :white_check_mark: | :x:                |
| Can create, modify, delete **task filters**                          | :white_check_mark: | :white_check_mark: | :x:                |
| Can create, modify, delete **discussions** and **topics**            | :white_check_mark: | :white_check_mark: | :x:                |
| Can send messages in **topics**                                      | :white_check_mark: | :white_check_mark: | :x:                |
| Can create, modify, delete **boards**                                | :white_check_mark: | :white_check_mark: | :x:                |
| Can pin/unpin content to **boards**                                  | :white_check_mark: | :white_check_mark: | :x:                |
| Can view **Analytics dashboards**                                    | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Can create, modify, and share **Analytics dashboards**               | :white_check_mark: | :white_check_mark: | :x:                |
| Can export **Analytics dashboards**                                  | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Can **bookmark** tasks, discussions, topics, content, analytics      | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Can **copy a link** to a task, discussion, topic, content, analytics | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### File Permissions
Files that are relevant to you might be stored in different locations and, in today's digital world, probably in different cloud storages. Slingshot lets you access those files, share them, and organize them within context of your workspaces and projects – so you can find the information you need, when you need it.  

Slingshot allows you to choose who can access your file and does not store any files. Connect directly to any cloud storage like Google Drive, DropBox, OneDrive and more to get access to your files. This means only you and the people you trust will get access so that your files stay safe.

### Setting File Permissions
File permissions give the file owner control over who can access their files. Giving access through Slingshot means other users can open and edit the file.
When you pin a file, Slingshot will assign the default file permissions, one of three following permission types:
- **Request Access** – Members must request access to the file from the file owner. This the default and most restrictive option. It means anyone who tries to open the file for the first time must request access to the file owner. The file owner will receive an email, prompting them to grant or deny access.
- **Automatic Access** – Permissions are automatically granted to members of the workspace or project. Very useful when you want all your workspace collaborators to have quick access to your file without asking you explicitly for access.
- **All Can Access** – Anyone can access and edit the file. This is the least restrictive option. Even users who are not members of the workspace will be able to access your file if they have a link to where it is located. 

While pinning a file, you can change the default file permissions in the Pin dialog.

After the pin is created, you can easily view/edit file permissions, just click the file overflow and select File Permissions.


### Revoking File Permissions
You can revoke editing permissions at any time. You have two possibilities:
- Revoke edit permissions to the file through your cloud storage provider - OneDrive, Google Drive, Dropbox, Box, and SharePoint.
- Stop granting access to the file to specific users through the Slingshot settings as explained below.

To view/edit file permissions, click the file overflow and select File Permissions. In the opened dialog you can change your previous selection.

To view/edit specific members access to the file, click the file overflow and select Member Access. In the dialog you will see all members who can view and edit the file plus pending requests for access if you have any.


>[!NOTE] Access is not automatically revoked. Users who have already opened the file once, are added as Editors and their access will not be automatically revoked with changing the file permissions to the more restrictive type. So, if you change a file's permissions from Automatic Access to Request Access make sure you check for Editors in Member Access and revoke their permissions if necessary.

## Data Privacy
Information privacy is about having the right to control how our personal information is collected and later used.

While data security focuses on protecting digital data, data privacy is about ensuring that personal information being collected is used and shared in an appropriate way.
For more information on how your information is used, you may read our [Privacy Policy](https://www.slingshotapp.io/privacy-policy).

### GDPR compliant
Slingshot aligns its data privacy practices with global data privacy laws such as the General Data Protection Regulation (GDPR). To protect data rights, Slingshot provides a controlled procedure for deleting and exporting users' data.
Under the GDPR law, the following people can request profile data export or deletion:
- a user with a personal account in Slingshot, or
- an Organization owner.

>[!NOTE] When you are part of an Organization, they own your profile information. If you want to have your data deleted, you must contact an administrator of personal data in your organization and request the deletion from them.

### Profile Information Contents
In collaboration software like Slingshot, what you do, affects the people you work with. If, for example, you start a discussion in a workspace, this information will be saved in Slingshot to help others. Everyone in the workspace can benefit from the information in the discussion and will see that you are its initiator.
The following is considered your profile information by Slingshot and will disappear from the app as a result of the deletion:
- your name and email address;
- your title, industry, and department if provided (see in Settings > Profile Information);
- all content created by you or shared with you;
- all task assignments - tasks you were assigned in a team or a project will become unassigned, but will not disappear;
- access to pinned files and dashboards will be denied - users in Slingshot will not be able to open files and dashboards that deleted users have shared.