package com.git.subscribeserver.product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Product {

    @Id
    private long productId;

    private long partnerId;

    private String productName;
    private int productPrice;
    private String productImageUrl;
    private String productInfo;
    private String foodType;
    private String expirationData;
    private String manufacturer;
    private String manufacturingDate;
    private String companyName;
    private String fileName;
    private String fileType;
    private long productUploadDate;
    private String companyIntroduce;
    private String companyAddress;
    private String companyContact;
    private String beanType;
    private String beanTag;
    private String processing;
    private String country;
    private String region;
    private String farm;
    private String cupNote;
    private String roastingPoint;
    private String variety;
    private int salesStatus;
}
