var Database = (function(){
	var db= {};
	var datastore = null;
	/** 
	 * Open a database to the datastore 
	 * **/
	db.open = function (callback){
		var version = 1;
		var request = window.indexedDB.open("quizEnglishDB",version);
		request.onerror = function(event) {
		console.log(event.target.errorCode);
		};
		request.onsuccess = function(event) {
			datastore = request.result;		  
		};
		request.onupgradeneeded = function(event) {
		  var db = event.target.result;
		  var objectStore = null;
		  objectStore = db.createObjectStore("question", { keyPath: "id"});		  
		  objectStore = db.createObjectStore("category", { keyPath: "id"});
		  objectStore = db.createObjectStore("test", { keyPath: "id"});
		  objectStore = db.createObjectStore("status", { keyPath: "id"});
		};
	};
	
	db.addData = function(){		
		this.getAllStore('status', function(datas){
			if(datas[0].status == '1'){
				return;
			} else{
				this.addQuestion();
				this.addCategory();
				this.addTest();
				this.addStatus();
			}
		});
	};
	
	db.getAllStore = function(store, callback){
		var datas=[];
		var objectStore = datastore.transaction(store).objectStore(store);
		transaction.oncomplete = function(e) {
		   callback(datas);
		};
		
		objectStore.openCursor().onsuccess = function(event) {
		  var cursor = event.target.result;	
	      if (cursor) {
	    	  datas.push(cursor);
		      cursor.continue();
	      }
		};
	};
	
	db.getQuetionById = function(id, callback){
		var datas=[];
		var objectStore = database.transaction('question').objectStore('question');
		transaction.oncomplete = function(e) {
		   callback(datas);
		};		
		objectStore.openCursor().onsuccess = function(event) {
		  var cursor = event.target.result;
	      if (cursor) {
	    	  if(cursor.id == id){
	    		  datas.push(cursor);
	    	  }
		      cursor.continue();
	      }
		};
	};
	
	db.addQuestion = function(){
		var question = {};
		var data = dataQuestion;
		var transaction = null;
		var objectStore = null;
		var request = null;
		for(var i = 0 ;i < data.length;i++){
			question.id= data[i].id;
			question.question = data[i].question;
			question.optiona = data[i].optiona;
			question.optionb = data[i].optionb;
			question.optionc = data[i].optionc;
			question.optiond = data[i].optiond;
			question.answer = data[i].answer;
			question.favourite = data[i].favourite;
			question.categoryid = data[i].categoryid;
			question.testid = data[i].testid;
			transaction = database.transaction(['question'], 'readwrite');
			objectStore = transaction.objectStore('question');
			request=objectStore.put(question);
			request.onsuccess = function(event) {				  
			};
			request.onerror = function(event) {				  
			};
		}
	};
	
	db.addCategory = function(){
		var category = {};
		var data = dataCategory;
		var transaction = null;
		var objectStore = null;
		var request = null;
		for(var i = 0 ;i < data.length;i++){
			category.id= data[i].id;
			category.name = data[i].name;		
			transaction = database.transaction(['category'], 'readwrite');
			objectStore = transaction.objectStore('category');
			request=objectStore.put(category);
			request.onsuccess = function(event) {
			};
			request.onerror = function(event) {				  
			};
		}
	};
	
	db.addTest = function(){
		var test = {};
		var data = dataTest;
		var transaction = null;
		var objectStore = null;
		var request = null;
		for(var i = 0 ;i < data.length;i++){
			test.id= data[i].id;
			test.name = data[i].name;
			test.categoryid= data[i].categoryid;
			transaction = database.transaction(['test'], 'readwrite');
			objectStore = transaction.objectStore('test');
			request=objectStore.put(test);
			request.onsuccess = function(event) {
			};
			request.onerror = function(event) {				  
			};
		}
	};
	
	db.addStatus = function (){
		var status = {};
		var data = dataTest;
		var transaction = null;
		var objectStore = null;
		var request = null;	
		status.id= 1;
		status.stastus = 1;
		transaction = database.transaction(['status'], 'readwrite');
		objectStore = transaction.objectStore('status');
		request=objectStore.put(status);
		request.onsuccess = function(event) {
		};
		request.onerror = function(event) {				  
		};
	};
	
}());

//var Database = {
//	/** Database object **/
//	db: null,
//	
//	/** Open database, call when device ready **/
//	openDbSqlite: function() {		
//		this.db = window.openDatabase("Databases", "1", "Databases", 50000);
//	},
//	
//	createStatus:function(){
//		this.db.transaction(function(tx) {			
//			tx.executeSql("CREATE TABLE IF NOT EXISTS status  (id integer primary key, status integer)", [], function(tx, result) {
//				if (result != null && result.rows != null && result.rows.length > 0) {
//					row = result.rows.item(0);
//					alert(row.status);
//				}
//			},this.nullHandler);
//			tx.executeSql('INSERT INTO status (id, status) VALUES (4, 456)');
//		}, this.nullHandler, this.nullHandler);
//	},
//	
//	selectStatus: function(){
//		this.db.transaction(function(tx) {			
//			tx.executeSql("SELECT * FROM status LIMIT 1", [], function(tx, results) {
//				var len = results.rows.length, i;
//				   //msg = "<p>Found rows: " + len + "</p>";
//				   //document.querySelector('#status').innerHTML +=  msg;
//				   for (i = 0; i < len; i++){
//				     //msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
//				     //document.querySelector('#status').innerHTML +=  msg;
//					   alert(results.rows.item(i).status);
//				   }
//			},this.nullHandler);
//		}, this.nullHandler, this.nullHandler);
//	}	
//}
