package com.example.wbdvsp20ChenchengGengserverjava.repositories;

import com.example.wbdvsp20ChenchengGengserverjava.models.Topic;
import com.example.wbdvsp20ChenchengGengserverjava.models.Widget;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WidgetRepository extends CrudRepository<Widget, Integer> {

    @Query(value = "SELECT * FROM widgets WHERE topic_id=:tid",nativeQuery = true)
    public List<Widget> findWidgetsForTopic(@Param("tid") Integer topicId);

    @Query(value = "SELECT * FROM widgets",nativeQuery = true)
    public List<Widget> findAllWidgets();

    @Query(value = "SELECT * FROM widgets where id=:wid",nativeQuery = true)
    public Topic findWidgetById(@Param("wid") Integer widgetId);
}
