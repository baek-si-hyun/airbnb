package com.example.airbnb.ifs;

import com.example.airbnb.model.network.Header;

public interface CrudInterface <Req, Res>{

    Header<Res> create(Header<Req> request);
    Header<Res> read(Long id);
    Header<Res> update(Header<Req> request);
    Header<Res> delete(Long id);
}