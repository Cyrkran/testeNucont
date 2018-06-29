function connectionUtilities() {

    this.sendAjaxRequest = function (url, method, data, successFunction, errorFunction, sync, complete, beforeSend, contentType) {

        if (url == null || url == undefined)
            return;

        method = (method == null || method == undefined) ? "GET" : method;
        sync = (sync == null || sync == undefined) ? true : sync;

        if (!contentType) {
            contentType = "application/json";
        }

        return  $.ajax({
            url: url,
            method: method,
            success: successFunction,
            error: errorFunction,
            async: sync,
            processData: false,
            data: data,
            complete: complete,
            beforeSend, beforeSend,
            contentType: false
        });

    }.bind(this);
};

var connectionUtilities = new connectionUtilities();
