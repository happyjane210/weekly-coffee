package com.git.subscribeserver.subscribe.subscribeDetail;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscribeDetailRepository extends JpaRepository<SubscribeDetail, SubscribeDetailId> {

}
