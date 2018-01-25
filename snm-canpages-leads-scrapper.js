var company_name 	= document.querySelectorAll("#results-panel .result__head a");

var c_location 		= document.querySelectorAll("#results-panel .result__address");

var phone 		= document.querySelectorAll("#results-panel .jsShowPhone");

var c_category 		= document.querySelectorAll("#results-panel .result__business-category")



var n;
var length 	= company_name.length;

for ( n = 0; n < length ; n++ ) {
	if (phone[n]) {
		phone[n].click();
	}
}

var phone 		= document.querySelectorAll("#results-panel .phone__number");

var leads 	= [];
		
var serial 	= 0;

for ( n = 0; n < length ; n++ ) {
	if (company_name[serial]) {
		filtered_company_name 	= String("\"" 	+ company_name[serial].innerText 	+ "\"");
	}
	else {
		filtered_company_name 	= "\"\"";
	}
	if (c_location[serial]) {
		filtered_c_location 	= String("\""   + c_location[serial].innerText 		+ "\"");
	}
	else {
		filtered_c_location 	= "\"\"";
	}
	if (phone[serial]) {
		filtered_phone 		= String("\"" 	+ phone[serial].innerText 		+ "\"");
	}
	else {
		filtered_phone 		= "\"\"";
	}
	if (c_category[serial]) {
		filtered_c_category 	= String("\"" 	+ c_category[serial].innerText 		+ "\"");
	}
	else {
		filtered_c_category 	= "\"\"";
	}
	
	leads.push([filtered_company_name,
	    filtered_c_location,
	    filtered_phone,
	    filtered_c_category]);
			
	var csv = '"Company Name";"Location";"Phone";"Category"\n';
						 
    leads.forEach(function(row) {
            csv += row.join(';');
            csv += "\n";
    });	
    
	serial = serial + 1;
}

var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'snm-canpages-leads.csv';
    hiddenElement.click();  
