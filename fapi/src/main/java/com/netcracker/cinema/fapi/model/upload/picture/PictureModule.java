package com.netcracker.cinema.fapi.model.upload.picture;

public class PictureModule {
    private byte[] pictureUrl;

    public PictureModule(byte[] pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public byte[] getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(byte[] pictureUrl) {
        this.pictureUrl = pictureUrl;
    }
}
