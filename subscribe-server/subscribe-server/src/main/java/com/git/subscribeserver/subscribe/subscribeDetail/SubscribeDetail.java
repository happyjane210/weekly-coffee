package com.git.subscribeserver.subscribe.subscribeDetail;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(SubscribeDetailId.class)
public class SubscribeDetail {
	@Id
    private long subscribeId;

    @Id
    private int seq;  // 상품 숫자

    private int beanAmount;
    private int term;
    private String groundPoint;
    private int orderQuantity;
    private int productPrice;

    private long productId;
    private String productImageUrl;
    private String productName;
    
    private long partnerId;
    private String companyName;












}

