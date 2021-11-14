package com.git.subscribeserver.product;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductId implements Serializable {

    private static final long serialVersionUID = 4115897150946242178L;

    private long productId;
    private long partnerId;
}
