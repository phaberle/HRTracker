const mysql = require("mysql2");
const db = require('./connection');

const all_depts = function () {
    let sql = "CALL sp_Select_All_Employees";
    db.query(sql, (err, data) => {
        if (err) throw err
        console.table(data[0]);
        db.end();
    })
};

const insert_dept = function (value) {
    let sql = `CALL sp_Insert_Dept(?)`;
    const params = [value];
    db.query(sql, params, (err, data) => {
        if (err) throw err
        console.log(result);
        db.end(value);
    })
};

const insert_employee = function (first, last, role_id, manager_id) {
    let sql = 'CALL sp_Insert_Employee(?,?,?,?)';
    const params = [first, last, role_id, manager_id];
    db.query(sql, params, (err, result) => {
        if (err) throw err
        console.log(result);
        db.end();
    })
}

const insert_role = function (name, pay, dept_id) {
    let sql = 'CALL sp_Insert_Role(?,?,?)';
    const params = [name, pay, dept_id];
    db.query(sql, params, (err, result) => {
        if (err) throw err
        console.log(result);
        db.end();
    })
}

const select_dept_mgr_role_by_dept = function (dept_id) {
    let sql = 'CALL sp_Select_dept_mgr_role_by_dept(?)';
    const params = [dept_id];
    db.query(sql, params, (err, result) => {
        if (err) throw err
        console.table(result[0]);
        db.end();
    })
}

const select_depts = function () {
    let sql = 'CALL sp_Select_Depts';
    db.query(sql,(err, result) => {
        if (err) throw err
        console.table(result[0]);
        db.end();
    })
}

const select_title_by_dept= function(dept_id){
let sql = 'CALL sp_Select_Title_by_Dept(?)';
const params = [dept_id];
db.query(sql, params, (err,results)=> {
    if(err) throw err
    console.table(results[0]);
    db.end();
})
}

const select_single_employee = function(emp_id){
    let sql='CALL sp_Select_Single_Employee(?)';
    const params = [emp_id];
    db.query(sql, params, (err,results)=>{
        if(err) throw err
        console.table(results[0]);
        db.end();
    })
}

const select_all_roles = function(){
    let sql = 'CALL sp_Select_All_Roles';
    db.query(sql,(err, result) => {
        if (err) throw err
        console.table(result[0]);
        db.end();
    })
}

module.exports = {
                    all_depts,
                    insert_dept,
                    insert_employee,
                    insert_role,
                    select_dept_mgr_role_by_dept,
                    select_depts,
                    select_title_by_dept,
                    select_single_employee,
                    select_all_roles
                };