use test ;
SET SESSION sql_mode = 'ALLOW_INVALID_DATES';#设置无效日期需改设置
create TABLE t_test2(
a int,
#1，TIMESTAMP DEFAULT CURRENT_TIMESTAMP   
t1 TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
#2 在创建新记录和修改现有记录的时候都对这个数据列刷新
t2 TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
#3 在创建新记录的时候把这个字段设置为0,每次更新时记录更新时间。
t3 TIMESTAMP ON UPDATE CURRENT_TIMESTAMP  
);


INSERT INTO t_test2(a) values(1);
INSERT INTO t_test2(a) values(2);
INSERT INTO t_test2(a) values(3);

INSERT INTO t_test2(a) values(5);
SELECT * from t_test2;

SET SQL_SAFE_UPDATES = 0; #更新需改设置
UPDATE t_test2 set a=9 where a=1;
show variables like 'SQL_SAFE_UPDATES';
SET SQL_SAFE_UPDATES = 0;
