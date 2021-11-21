package com.git.subscribeserver.product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductSalesResponse {

	private long partnerId;
    private long productId;
    private int salesStatus;
}
