package com.git.subscribeserver.subscribe;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscribeRepository extends JpaRepository<Subscribe, Long> {

	Page<Subscribe> findBySubscriberId(Pageable page, int subscriberId);
}
