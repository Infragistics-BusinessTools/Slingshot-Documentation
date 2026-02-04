---
title: How to configure and use NetSuite Data Source 
_description: Connecting and using NetSuite data source as a data source in Slingshot.
---

# NetSuite

## Connecting to NetSuite

To configure a NetSuite data source, you will need to enter the following information:

<img src="images/netsuite-connection-dialog.png" alt="Configure NetSuite data source connection" class="responsive-img"/>

1. **Default name** of the data source: Your data source name will be displayed in the list of accounts in the previous dialog. By default, Analytics names it *NetSuite*. You can change it to your preference.

2. **Account ID**: Your NetSuite account identifier. This can be found in your NetSuite URL (for example, if your NetSuite URL is `https://1234567.app.netsuite.com`, your Account ID is `1234567`).

3. **Credentials**: After selecting *Credentials*, you will need to authenticate using OAuth 2.0:

   - Click/tap **Connect to NetSuite** to start the OAuth authentication flow
   - You will be redirected to NetSuite's login page
   - Enter your NetSuite username and password
   - Authorize Slingshot to access your NetSuite data
   - You will be redirected back to Slingshot upon successful authentication

   > [!NOTE] 
   > **OAuth Setup Required**: Before connecting, ensure that OAuth 2.0 is properly configured in your NetSuite account. You will need to create an integration record in NetSuite under *Setup > Integration > Manage Integrations*.

Once ready, select **Load and Continue**.

## Setting up Your Data

After connecting to NetSuite, you can:

1. **Browse available tables**: NetSuite provides access to various data tables including Customers, Items, Transactions, and more.

<img src="images/netsuite-tables-list.png" alt="List of NetSuite tables" class="responsive-img"/>

2. **Select a table**: Choose the table that contains the data you want to analyze.

3. **Use SuiteQL**: For advanced users, you can create custom SuiteQL queries to access specific data combinations.

## Working with the Visualization Editor

You will now see the **Visualization Editor**. You can start building your visualization with the data retrieved from NetSuite.

<img src="images/netsuite-visualization-editor.png" alt="NetSuite data in visualization editor" class="responsive-img"/>

## NetSuite-Specific Considerations

### Required Permissions

Ensure your NetSuite user has the following permissions:
- **SuiteAnalytics Connect** - For data access
- **REST Web Services** - For API access  
- **Login using Access Tokens** - For OAuth authentication

### OAuth Configuration in NetSuite

Before connecting Slingshot to NetSuite, you need to configure OAuth in your NetSuite account:

1. Navigate to **Setup > Integration > Manage Integrations**
2. Create a **New** integration record
3. Configure the following settings:
   - **Name**: Slingshot Integration
   - **State**: Enabled
   - **Callback URL**: Use the callback URL provided by Slingshot
   - **Scope**: `restlets rest_webservices`

### Available Data

NetSuite connector provides access to:
- **Standard Records**: Customers, Vendors, Items, Employees
- **Transaction Records**: Sales Orders, Invoices, Purchase Orders
- **Financial Data**: Account balances, General Ledger transactions
- **Custom Records**: Any custom record types defined in your NetSuite account
- **Saved Searches**: Pre-configured NetSuite searches and reports

### Performance Tips

- **Use Filters**: Apply date ranges and other filters to limit data retrieval
- **Select Specific Fields**: Choose only the fields you need for better performance
- **Consider Saved Searches**: Use NetSuite saved searches for complex data requirements
- **Schedule Refreshes**: Set appropriate data refresh intervals based on your needs

## Troubleshooting

### Common Connection Issues

**Problem**: "Account ID cannot be null or empty"
**Solution**: Verify that your NetSuite Account ID is correctly entered. Check your NetSuite URL to confirm the account identifier.

**Problem**: OAuth authentication fails
**Solution**: 
- Ensure the integration record is enabled in NetSuite
- Verify that the callback URL is correctly configured
- Check that your NetSuite user has the required permissions

**Problem**: Cannot access expected data
**Solution**:
- Verify your NetSuite role has access to the required records
- Check that the relevant NetSuite features are enabled
- Ensure proper record-level permissions are configured

### Getting Help

For additional support:
- Review NetSuite's SuiteCloud documentation for integration setup
- Check your NetSuite system logs for detailed error information
- Contact your NetSuite administrator for permission and configuration issues
