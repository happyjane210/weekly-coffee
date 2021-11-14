package com.git.subscribeserver.subscribe.subscribeDetail;

import com.git.subscribeserver.product.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.ManyToOne;

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
    private int seq;

    @ManyToOne
    private Product product;

    private long partnerId;
    private String productName;
    private int productPrice;
    private int beanAmount;
    private int term;
    private int orderQuantity;
    private String groundPoint;
    private String productImageUrl;
}

