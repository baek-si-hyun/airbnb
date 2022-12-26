-- ?öå?õê members table
create table member(
    mem_id number(10) primary key,
    mem_knd varchar2(20) not null,
    mem_name varchar2(50) not null,
    mem_firstname varchar2(20) not null,
    mem_pw varchar2(255) not null,
    email varchar2(255) not null,
    birth date not null,
    mem_hp varchar2(30),
    mem_content varchar2(4000),
    confirm_status varchar2(4),
    is_logshare varchar2(10) default 'Y N',
    confirm_at date,
    update_at date,
    out_at date
);

create sequence member_idx
    increment by 1
    start with 1;


drop sequence member_idx;

drop table member;

select * from member;