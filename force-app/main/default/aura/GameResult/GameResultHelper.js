({
    fetchResult : function(component) {
        const action = component.get("c.getResults");
      
        action.setCallback(this, function(response) {
            const state = response.getState();
            if (state === "SUCCESS") {
                const resp=response.getReturnValue();
                component.set("v.data", resp);
                 component.set("v.currentPage", 1); // reset to first page
                this.updatePagination(component);  // call pagination after data load

    }
});
$A.enqueueAction(action);
    },

     updatePagination : function(component) {
        const data = component.get("v.data");
        const pageSize = component.get("v.pageSize");
        const currentPage = component.get("v.currentPage");

        const totalPages = Math.ceil(data.length / pageSize);
        component.set("v.totalPages", totalPages);

        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, data.length);

        const currentPageData = data.slice(startIndex, endIndex);
        component.set("v.currentPageData", currentPageData);


    }});