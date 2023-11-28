Ext.application({
    name: 'MyApp',

    launch: function () {
        Ext.create('Ext.panel.Panel', {
            title: 'Login Form',
            width: 300,
            bodyPadding: 10,
            renderTo: Ext.getBody(),
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'ID',
                    itemId: 'idField',
                    allowBlank: false,
                },
                {
                    xtype: 'textfield',
                    inputType: 'password',
                    fieldLabel: 'Password',
                    itemId: 'passwordField',
                    allowBlank: false,
                },
                {
                    xtype: 'button',
                    text: 'Login',
                    handler: function () {
                        var idField =
                            this.up('panel').down('#idField');
                        var passwordField =
                            this.up('panel').down('#passwordField');

                        var id = idField.getValue();
                        var password = passwordField.getValue();

                        Ext.Msg.alert(
                            'Login Information',
                            'ID: ' +
                            id +
                            '<br>Password: ' +
                            password,
                        );
                    },
                },
            ],
        });
    },
});