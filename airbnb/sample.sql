-- 회원 members table
create table member(
    mem_id number(10) primary key,
    mem_knd varchar2(20),
    mem_name varchar2(50),
    mem_firstname varchar2(20),
    mem_pw varchar2(255),
    email varchar2(255) unique,
    birth varchar2(20),
    mem_hp_contr varchar2(20),
    mem_hp varchar2(30),
    confirm_status varchar2(4),
    is_logshare varchar2(3) default 'Y N',
    confirm_at date,
    update_at date,
    out_at date
);

-- 회원 개인정보 보호 및 공유 mem_security
create table mem_security(
    mem_id number(10) primary key,
    is_logshare varchar2(10),
    is_datashare varchar2(10)
);

-- 회원 알림 mem_notice
create table mem_notice(
    mem_id number(10) primary key,
    is_celebrate varchar2(10),
    is_trip varchar2(10),
    is_trend varchar2(10),
    is_hostbenefit varchar2(10),
    is_news varchar2(10),
    is_localrules varchar2(10),
    is_idea varchar2(10),
    is_plan varchar2(10),
    is_program varchar2(10),
    is_feedback varchar2(10),
    is_triprules varchar2(10),
    is_account varchar2(10),
    is_lodging varchar2(10),
    is_guest varchar2(10),
    is_host varchar2(10),
    is_alarm varchar2(10),
    is_message varchar2(10)
);

-- 회원 글로벌 환경설정 mem_global
create table mem_global(
    mem_id number(10) primary key,
    prefer_lan varchar2(30),
    prefer_curr varchar2(30),
    on_times varchar2(30)
);

-- 회원 개인정보 mem_info
create table mem_info(
    mem_id number(10) primary key,
    mem_location varchar2(100),
    mem_lan varchar2(100),
    mem_comp varchar2(100),
    mem_gender varchar2(10),
    mem_birth varchar2(30),
    mem_emer_hp varchar2(20),
    payment_id number(10),
    address_cont varchar2(100),
    address_state varchar2(100),
    address_city varchar2(100),
    address_road varchar2(100),
    address_detail varchar2(100),
    address_post varchar2(100),
    mem_content varchar2(4000)
    );

create table mem_payment(
    mem_id number(10) primary key,
    payment_id number(10),
    payment_for_id number(10),
    is_donate varchar2(10)
);

create sequence member_idx
    increment by 1
    start with 1;


drop sequence member_idx;

drop table member;
drop table mem_security;
drop table mem_notice;
drop table mem_global;
drop table mem_info;
drop table mem_payment;

select * from member;
select * from mem_security;
select * from mem_notice;
select * from mem_global;
select * from mem_info;
select * from mem_payment;
