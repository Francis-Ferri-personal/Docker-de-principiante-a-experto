$(document).ready(function(event){var $j=window.$j||jQuery;$j("#searchText").endecaSearchSuggest({minAutoSuggestInputLength:2,autoSuggestServiceUrl:contextRoot+"/search/includes/typeaheadcontent.jsp",contextPath:contextRoot,delay:250,timeOut:2000});
});function submitSearch(){var sText=$("input#searchText").val();if(sText!=undefined&&sText.trim()!=""){$("#searchForm").submit();
}}function clearSearchTerm(element){$(element).val("").focus();if(typeof dataLayer!=="undefined"){dataLayer.push({event:"e_clearSearchBar"});
}}