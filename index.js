// const inquirer = require(inquirer);
const mysql = require("mysql2");
const queries = require('./db/queries');


//const test= queries.all_depts();
// const test2 = queries.insert_dept("Maintenance");
//const test3 = queries.insert_employee("homer","simpson",5,1);
//const test4 = queries.insert_role("Baker",40000,4);
//const test5 = queries.select_dept_mgr_role_by_dept(4);
//const test6 = queries.select_depts();
//const test7 = queries.select_title_by_dept(3);
//const test8 = queries.select_single_employee(59);
const test9 = queries.select_all_roles();