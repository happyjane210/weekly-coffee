package com.git.subscribeserver.subscribe;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscribeRepository extends JpaRepository<Subscribe, Long> {

	//List<Subscribe> findBySubscriberId();
}
