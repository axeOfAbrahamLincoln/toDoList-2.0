const { nextLine } = require("@learnly/simple-reader");
const { makeItem, toDoList, toDoDB, Oper } = require("./variables");
const fs = require("fs");
/*
let Oper = ["add", "list", "todo", "done", "delete", "modify", "exit"];

function makeItem() {
	let item = {
		toDo: "",
		isDone: false,
		priority: "",
		made: new Date().toLocaleString("en-GB", { hour12: false }),
		dueTo: "saturday",
	};
	console.log("Enter your new item:");
	item.toDo = nextLine();
	console.log("Set priority to [low,medium,important]:");
	item.priority = nextLine();
	return item;
}
let toDoList = {
	items: [],

	addItem: function (item) {
		this.items.push(item);
		console.log("Item saved!");
	},
	deleteItem: function () {
		console.log(`Enter item number you would like to delete [1-${this.items.length}]:`); //templetes strings used with `` - backticks
		let deleteItemNumber = Number(nextLine());
		if (deleteItemNumber > this.items.length || deleteItemNumber <= 0 || isNaN(deleteItemNumber)) {
			console.log("invalid item number");
			return;
		}
		this.items.splice(deleteItemNumber - 1, 1);
		console.log("Deleting " + deleteItemNumber);
		console.log("Deleted!");
	},
	listItems: function () {
		console.log("Your current items:");
		for (let i = 0; i < this.items.length; i++) {
			console.log(i + 1 + ". " + this.items[i].toDo);
			this.items[i].isDone ? console.log("[x] Done") : console.log("[ ] Not done");
			console.log(`${this.items[i].priority} priority`);
		}
	},
	listToDo: function () {
		let filterNotDone = this.items.filter((elm) => {
			if (!elm.isDone) {
				return elm;
			}
		});
		console.log(`You have still ${filterNotDone.length} item(s) to do:`);
		for (let i = 0; i < filterNotDone.length; i++) {
			console.log(i + 1 + ". " + filterNotDone[i].toDo);
			filterNotDone[i].isDone ? console.log("[x] Done") : console.log("[ ] Not done");
			console.log(`${filterNotDone[i].priority} priority`);
		}
	},
	listDone: function () {
		let filterDone = this.items.filter((elm) => {
			if (elm.isDone) {
				return elm;
			}
		});
		console.log(`You did already ${filterDone.length} item(s):`);
		for (let i = 0; i < filterDone.length; i++) {
			console.log(i + 1 + ". " + filterDone[i].toDo);
			filterDone[i].isDone ? console.log("[x] Done") : console.log("[ ] Not done");
			console.log(`${filterDone[i].priority} priority`);
		}
	},
	modifyItem: function () {
		console.log(`Enter item number you would like to modify [1-${this.items.length}]:`); //templetes strings used with `` - backticks
		let modifyItemNumber = Number(nextLine());
		if (modifyItemNumber > this.items.length || modifyItemNumber <= 0 || isNaN(modifyItemNumber)) {
			console.log("invalid item number");
			return;
		}
		console.log("Modify todo item:" + this.items[modifyItemNumber - 1].toDo);
		this.items[modifyItemNumber - 1].toDo = nextLine();
		console.log("Done? [y or n]:");
		let answer = nextLine();
		if (answer == "y") {
			this.items[modifyItemNumber - 1].isDone = true;
		} else if (answer == "n") {
			this.items[modifyItemNumber - 1].isDone = false;
		} else {
			console.log("invalid answer, not modified ");
		}
	},
};
let toDoDB = {
	filePath: "todolist.txt",
	toReadFile: function () {
		try {
			toDoList.items = fs.readFileSync(this.filePath, "utf-8").split(/\r?\n/).map(JSON.parse);
		} catch (err) {
			console.log("List is empty, nothing to read");
		}
	},
	toWriteFile: function () {
		try {
			if (toDoList.items == false) {
				fs.writeFileSync(this.filePath, toDoList.items.toString(), "utf-8");
			} else {
				const text = toDoList.items.map(JSON.stringify).reduce((prev, next) => `${prev}\n${next}`);
				fs.writeFileSync(this.filePath, text, "utf-8");
			}
		} catch (err) {
			console.log("Something went wrong while writing content: " + err);
		}
	},
};
*/
toDoDB.toReadFile();
while (true) {
	console.log("What operation would you like to perform? One of [add, list, todo, done, delete, modify, exit]");
	OperationInput = nextLine();
	if (Oper.includes(OperationInput)) {
		//array.includes
		console.log(OperationInput + " operation selected...");
	} else {
		console.log("invalid operation");
		continue;
	}
	if (OperationInput == "exit") {
		toDoDB.toWriteFile();
		console.log("Goodbye!");
		break;
	}
	if (OperationInput == "add") {
		toDoList.addItem(makeItem());
	}
	if (OperationInput == "list") {
		toDoList.listItems();
	}
	if (OperationInput == "delete") {
		if (toDoList.items.length == 0) {
			console.log("no available items");
			continue;
		}
		toDoList.listItems();
		toDoList.deleteItem();
	}
	if (OperationInput == "todo") {
		toDoList.listToDo();
	}
	if (OperationInput == "done") {
		toDoList.listDone();
	}
	if (OperationInput == "modify") {
		toDoList.listItems();
		toDoList.modifyItem();
	}
}
