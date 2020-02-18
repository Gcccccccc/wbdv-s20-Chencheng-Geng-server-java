package com.example.wbdvsp20ChenchengGengserverjava.controllers;

import com.example.wbdvsp20ChenchengGengserverjava.models.Widget;
import com.example.wbdvsp20ChenchengGengserverjava.services.WidgetService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WidgetController {
    WidgetService service = new WidgetService();

    @PostMapping("/api/topics/{tid}/widgets")
    public Widget createWidget(@PathVariable("tid") String topicId, @RequestBody Widget widget) {
        return service.createWidget(topicId,widget);
    }

    @GetMapping("/api/topics/{tid}/widgets")
    public List<Widget> findWidgetsForTopic(@PathVariable("tid") String topicId){
        return service.findWidgetsForTopic(topicId);
    }

    @DeleteMapping("/api/widgets/{wid}")
    public int deleteWidget(@PathVariable("wid") String wid){
        return service.deleteWidget(wid);
    }

    @PutMapping("/api/widgets/{wid}")
    public int updateWidget(@PathVariable("wid") String wid, @RequestBody Widget widget){
        return service.updateWidget(wid,widget);
    }
}
