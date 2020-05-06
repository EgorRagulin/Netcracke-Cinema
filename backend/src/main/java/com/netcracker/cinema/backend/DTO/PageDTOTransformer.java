package com.netcracker.cinema.backend.DTO;

public class PageDTOTransformer<T1, T2> {
    private PageDTO<T1> pageDTOType1;
    private PageDTO<T2> pageDTOType2;

//    public PageDTOTransformer(PageDTO<T1> pageDTOType1) {
//        this.pageDTOType1 = pageDTOType1;
//        this.pageDTOType2 = transform();
//    }
//
//    private PageDTO<T2> transform() {
//        List<T2> listOfType2 = new ArrayList<T2>();
//        this.pageDTOType1.getCollectionOfElements().forEach(itemType1 -> listOfType2.add(new T2(itemType1)));
//
//        PageDTO<T2> pageDTOType2 = new PageDTO(listOfType2, pageDTOType1);
//        return pageDTOType2;
//    }

}
