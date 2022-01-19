var table=document.getElementById("mytab1");
var r=0; //start counting rows in table
while(row=table.rows[r++])
{
  var c=0; //start counting columns in row
  while(cell=row.cells[c++])
  {
    cell.innerHTML= r ; // do sth with cell
  }
}