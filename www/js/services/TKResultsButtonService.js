
/*global angular*/
angular.module('TKResultsButton', [])
.service('TKResultsButtonService', function()
{
    //This declares just a getter and a setter for a variable
    var service = this;
    var shouldShowButton = false;
   
    service.setShouldShowMenuButton = function(show)
    {
        shouldShowButton = show;
    };
   
    service.getShouldShowMenuButton = function()
    {
        return shouldShowButton;
    };
});