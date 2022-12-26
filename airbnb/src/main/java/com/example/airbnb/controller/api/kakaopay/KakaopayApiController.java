//package com.example.airbnb.controller.api.kakaopay;
//
//import com.example.airbnb.model.VO.KakaoPayApprovalVO;
//import com.example.airbnb.model.VO.KakaoPayReadyVO;
//import com.example.airbnb.model.network.Header;
//import com.example.airbnb.model.network.request.payment.kakaopayRequest;
//import lombok.Setter;
//import lombok.extern.java.Log;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpEntity;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.MediaType;
//import org.springframework.stereotype.Controller;
//import org.springframework.util.LinkedMultiValueMap;
//import org.springframework.util.MultiValueMap;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.client.RestClientException;
//import org.springframework.web.client.RestTemplate;
//
//import java.io.*;
//import java.net.*;
//
//
//@Controller
//@RequestMapping("/pages/api/kakaopay")
//@Log
//public class KakaopayApiController {
//    @RequestMapping("/kakaos")
//    @ResponseBody
//    public String kakaopay(@RequestBody Header<kakaopayRequest> request){
//        try {
//            String lodgingName = request.getData().getLodgingName();
//            String category = request.getData().getCategory();
//            int price = request.getData().getPrice();
//            int totalPrice = (int)(price*1.1);
//            int vat = (int)(price*0.1);
//            String sample = URLEncoder.encode(lodgingName,"utf-8");
//            URL address = new URL("https://kapi.kakao.com/v1/payment/ready");
//            HttpURLConnection connection = (HttpURLConnection)address.openConnection();
//            connection.setRequestMethod("POST");
//            connection.setRequestProperty("Authorization", "KakaoAK 9b1b615765ae5fc4543edb5442ccb6f0");
//            connection.setRequestProperty("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
//            connection.setDoOutput(true);
//            String parameter = "cid=TC0ONETIME&partner_order_id=partner_order_id&partner_user_id=AirBnb&item_name="+sample+"&quantity=1&total_amount="+totalPrice+"&vat_amount="+vat+"&tax_free_amount=0&approval_url=http://localhost:8080/pages/kakaosuccess&fail_url=http://localhost:8080/pages&cancel_url=http://localhost:8080/pages";
//            OutputStream outputStream = connection.getOutputStream();
//            DataOutputStream dataOutputStream = new DataOutputStream(outputStream);
//            dataOutputStream.writeBytes(parameter);
//            dataOutputStream.close(); //닫히면서 flush() 되며 데이터를 송신
//
//            int resultCode = connection.getResponseCode();
//            InputStream inputStream;
//            if(resultCode == 200){
//                inputStream = connection.getInputStream();
//            }else{
//                inputStream = connection.getErrorStream();
//            }
//            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
//            BufferedReader reader = new BufferedReader(inputStreamReader);
//            return reader.readLine();
//        } catch (MalformedURLException e) {
//            throw new RuntimeException(e);
//        } catch (IOException e) {
//            throw new RuntimeException(e);
//        }
//    }
//}
