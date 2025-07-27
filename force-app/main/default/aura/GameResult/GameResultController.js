({
    doInit : function(component, event, helper) {
    const colums=[
        {label: 'Game Number', fieldName: 'Name', type: 'text'},
        {label: 'Mode', fieldName: 'Mode__c', type: 'text'},
        {label: 'Played On', fieldName: 'CreatedDate', type: 'date'},
        {label: 'Result', fieldName: 'Result__c', type: 'text'}
    ];
    component.set("v.columns", colums);

    //get previous game results
    helper.fetchResult(component);
    },

    onResultHandler : function(component, event, helper) {
        //get previous game results
        helper.fetchResult(component);
    },

       previousPage : function(component, event, helper) {
        let currentPage = component.get("v.currentPage");
        component.set("v.currentPage", currentPage - 1);
        helper.updatePagination(component);
    },

    nextPage : function(component, event, helper) {
        let currentPage = component.get("v.currentPage");
        component.set("v.currentPage", currentPage + 1);
        helper.updatePagination(component);
    }
});