package com.example.wbdvsp20ChenchengGengserverjava.repositories;

import com.example.wbdvsp20ChenchengGengserverjava.models.Topic;
import com.example.wbdvsp20ChenchengGengserverjava.models.Widget;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WidgetRepository extends CrudRepository<Widget, Integer> {

    @Query("select widget from Widget widget where widget.topic.id=:tid")
    public List<Widget> findWidgetsForTopic(@Param("tid") Integer topicId);

    @Query(value = "SELECT * FROM widgets",nativeQuery = true)
    public List<Widget> findAllWidgets();

    @Query(value = "SELECT * FROM widgets WHERE id=:wid",nativeQuery = true)
    public Widget findWidgetById(@Param("wid") Integer widgetId);
}
