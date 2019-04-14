

var myApp = {
  docID : "12n6si_w1blCQFqHO9JLy4cOZPE8NOWjr8DhFdZR_HGQ",
  categoriesSheet : 'Cat./ssCat./Tiers',
  categoriesRange : 'A2:D',
  inputDataSheet : 'Mouvements'
}

function doGet(e){
  return HtmlService
    .createTemplateFromFile('index')
    .evaluate();
}



function addDatas(e) {
 
    var ss = SpreadsheetApp.getActiveSpreadsheet();
  
   // var origin = SpreadsheetApp.openById("433313689");
    //var destination = SpreadsheetApp.openById("2002999369");
  
    var source_sheet = ss.getSheetByName("Input");
    var target_sheet = ss.getSheetByName("Mouvements");
   
    // we'll assume header is in row 1 but you can override with header_row in GET/POST data
    var last_row = target_sheet.getLastRow();
    target_sheet.insertRowAfter(last_row);
    var target_range = target_sheet.getRange("A"+(last_row+1));
  
    var dataDate = source_sheet.getRange('J1');
    target_range = target_sheet.getRange("A"+(last_row+1));
    dataDate.copyValueTo(target_range);

    var dataDate = source_sheet.getRange('J2');
    target_range = target_sheet.getRange("B"+(last_row+1));
    dataDate.copyValueTo(target_range);

    var dataDate = source_sheet.getRange('J3');
    target_range = target_sheet.getRange("C"+(last_row+1));
    dataDate.copyValueTo(target_range);

    var dataDate = source_sheet.getRange('J4');
    target_range = target_sheet.getRange("D"+(last_row+1));
    dataDate.copyValueTo(target_range);

    var dataDate = source_sheet.getRange('J5');
    target_range = target_sheet.getRange("E"+(last_row+1));
    dataDate.copyValueTo(target_range);  

    var dataDate = source_sheet.getRange('J6');
    target_range = target_sheet.getRange("F"+(last_row+1));
    dataDate.copyValueTo(target_range);    
  
    target_range = target_sheet.getRange("F"+(last_row+1));
  
    var cell = target_sheet.getRange("I"+(last_row+1));
    cell.setFormula("=text(A"+(last_row+1)+",\"MMMM YY\")");   //=text(A9,"MMMM YY")  https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet
   cell.c
  
}

function getCategories() {
  return SpreadsheetApp
      .openById(myApp.docID)
      .getSheet(myApp.categoriesSheet)
      .getDataRange(myApp.categoriesRange)
      .getValues();
}




