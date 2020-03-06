package com.example.wbdvsp20ChenchengGengserverjava.repositories;

import com.example.wbdvsp20ChenchengGengserverjava.models.Topic;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TopicRepository extends CrudRepository<Topic, Integer> {

    @Query(value = "SELECT * FROM topics WHERE lesson_id=:lid",nativeQuery = true)
    public List<Topic> findTopicsForLesson(@Param("lid") String lessonId);

    @Query(value = "SELECT * FROM topics",nativeQuery = true)
    public List<Topic> findAllTopics();

    @Query(value = "SELECT * FROM topics WHERE id=:tid",nativeQuery = true)
    public Topic findTopicById(@Param("tid") Integer topicId);
}
