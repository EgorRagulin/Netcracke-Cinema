package com.netcracker.cinema.fapi.controller.upload.picture;

import com.netcracker.cinema.fapi.model.CinemaViewModel;
import com.netcracker.cinema.fapi.model.upload.picture.PictureModule;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/upload-picture")
public class UploadPictureController {
    @PostMapping
    public PictureModule getPictureUrl(@RequestParam("picture") MultipartFile file) throws IOException {
        return new PictureModule(file.getBytes());
    }
}
