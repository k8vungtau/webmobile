var Database = {
	/** Database object **/
	db: null,
	
	/** Open database, call when device ready **/
	openDbSqlite: function() {		
		this.db = window.openDatabase("Databases", "1", "Databases", 50000);
	},
	
	createStatus:function(){
		this.db.transaction(function(tx) {			
			tx.executeSql("CREATE TABLE IF NOT EXISTS status  (id integer primary key, status integer)", [], function(tx, result) {
				if (result != null && result.rows != null && result.rows.length > 0) {
					row = result.rows.item(0);
					alert(row.status);
				}
			},this.nullHandler);
			tx.executeSql('INSERT INTO status (id, status) VALUES (4, 456)');
		}, this.nullHandler, this.nullHandler);
	},
	
	selectStatus: function(){
		this.db.transaction(function(tx) {			
			tx.executeSql("SELECT * FROM status LIMIT 1", [], function(tx, results) {
				var len = results.rows.length, i;
				   //msg = "<p>Found rows: " + len + "</p>";
				   //document.querySelector('#status').innerHTML +=  msg;
				   for (i = 0; i < len; i++){
				     //msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
				     //document.querySelector('#status').innerHTML +=  msg;
					   alert(results.rows.item(i).status);
				   }
			},this.nullHandler);
		}, this.nullHandler, this.nullHandler);
	}
	
}