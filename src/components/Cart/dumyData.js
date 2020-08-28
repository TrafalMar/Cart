export const Orders = {
  orders: [
    {
      id: 1,
      isDeferred: false,
      editMode: false,
      name: "Order's name",
      image:
        "http://pollardy.dev.devloop.pro/storage/product/5efb29e4bbc7c1593518564.jpg",
      price: 0,
      type: "polardi",
      typeValue: "Grace of your love",
      sizes: [
        { label: "Size 1", value: "1100" },
        { label: "Size 2", value: "1200" },
        { label: "Size 3", value: "1300" },
      ],
      colors: [
        { label: "Color 1", value: "100" },
        { label: "Color 2", value: "200" },
        { label: "Color 3", value: "300" },
      ],
      counts: [
        { label: 1, value: 1 },
        { label: 2, value: 2 },
        { label: 3, value: 3 },
      ],
      chosenSize: { label: "Size 1", value: "1100" },
      chosenColor: { label: "Color 1", value: "100" },
      chosenCount: { label: 1, value: 1 },
      additionalFeatures: {
        options: [
          // {
          //   label: "Пояс",
          //   value: [
          //     { label: "C вышивкой $(750)", value: 750 },
          //     { label: "C полувышивкой $(500)", value: 500 },
          //     { label: "C наклейкой вышивки $(250)", value: 250 },
          //   ],
          // },
          // {
          //   label: "Деталі",
          //   value: [
          //     { label: "Вышивка $(150)", value: 150 },
          //     { label: "Полувышивкой $(200)", value: 200 },
          //     { label: "Наклейка вышивки $(250)", value: 250 },
          //   ],
          // },
          { label: "C вышивкой $(750)", value: 750 },
          { label: "C полувышивкой $(500)", value: 500 },
          { label: "C наклейкой вышивки $(250)", value: 250 },
        ],
        selectedOptions: [{ label: "C наклейкой вышивки $(250)", value: 250 }],
      },
      commentaries: "бюст-85, талия-60, бедра-93",
      attachments: [
        {
          type: "img",
          src: "imgSrc.jpg",
        },
        {
          type: "img",
          src: "imgSrc.png",
        },
      ],
    },
    {
      id: 2,
      isDeferred: false,
      editMode: false,
      name: "DameDame",
      image:
        "http://pollardy.dev.devloop.pro/storage/product/gallery/5efb214f0fdf71593516367_442x624_1.jpg",
      price: 0,
      type: "polardi",
      typeValue: "Grace of your love",
      sizes: [
        { label: "Size 1", value: "3000" },
        { label: "Size 2", value: "3500" },
        { label: "Size 3", value: "3700" },
      ],
      colors: [
        { label: "Color 1", value: "100" },
        { label: "Color 2", value: "200" },
        { label: "Color 3", value: "300" },
      ],
      counts: [
        { label: 1, value: 1 },
        { label: 2, value: 2 },
        { label: 3, value: 3 },
      ],
      chosenSize: { label: "Size 1", value: "3000" },
      chosenColor: { label: "Color 1", value: "100" },
      chosenCount: { label: 1, value: 1 },
      additionalFeatures: {
        options: [
          { label: "C вышивкой $(750)", value: 750 },
          { label: "C полувышивкой $(500)", value: 500 },
          { label: "C наклейкой вышивки $(250)", value: 250 },
        ],
        selectedOptions: [],
      },
      commentaries: "бюст-85, талия-60, бедра-93",
      attachments: [
        {
          type: "img",
          src: "imgSrc.jpg",
        },
        {
          type: "img",
          src: "imgSrc.png",
        },
      ],
    },
    // {
    //   id: 2,
    //   isDeferred: false,
    //   name: "DameDame",
    //   image:
    //     "http://pollardy.dev.devloop.pro/storage/product/gallery/5efb214f0fdf71593516367_442x624_1.jpg",
    //   price: "777",
    //   type: "polardi",
    //   typeValue: "Grace of your love",
    //   sizes: [
    //     { label: "Size 1", value: 750 },
    //     { label: "Size 2", value: 500 },
    //     { label: "Size 3", value: 250 },
    //   ],
    //   colors: [
    //     { label: "Color 1", value: 750 },
    //     { label: "Color 2", value: 500 },
    //     { label: "Color 3", value: 250 },
    //   ],
    //   counts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    //   chosenSize: {},
    //   chosenColor: {},
    //   chosenCount: 1,
    //   additionalFeatures: {
    //     options: [
    //       { label: "C вышивкой $(750)", value: 750 },
    //       { label: "C полувышивкой $(500)", value: 500 },
    //       { label: "C наклейкой вышивки $(250)", value: 250 },
    //     ],
    //     selectedOptions: [],
    //   },
    //   commentaries: "бюст-85, талия-60, бедра-93",
    //   attachments: [
    //     {
    //       type: "img",
    //       src: "imgSrc.jpg",
    //     },
    //     {
    //       type: "img",
    //       src: "imgSrc.png",
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   isDeferred: false,
    //   name: "La'Pure",
    //   image:
    //     "http://pollardy.dev.devloop.pro/storage/product/5efb232ac52851593516842_442x624_1.jpg",
    //   price: "67",
    //   type: "polardi",
    //   typeValue: "Grace of your love",
    //   sizes: [
    //     { label: "Size 1", value: 750 },
    //     { label: "Size 2", value: 500 },
    //     { label: "Size 3", value: 250 },
    //   ],
    //   colors: [
    //     { label: "Color 1", value: 750 },
    //     { label: "Color 2", value: 500 },
    //     { label: "Color 3", value: 250 },
    //   ],
    //   counts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    //   chosenSize: {},
    //   chosenColor: {},
    //   chosenCount: 2,
    //   additionalFeatures: {
    //     options: [
    //       { label: "C вышивкой $(750)", value: 750 },
    //       { label: "C полувышивкой $(500)", value: 500 },
    //       { label: "C наклейкой вышивки $(250)", value: 250 },
    //     ],
    //     selectedOptions: [],
    //   },
    //   commentaries: "бюст-85, талия-60, бедра-93",
    //   attachments: [
    //     {
    //       type: "img",
    //       src: "imgSrc.jpg",
    //     },
    //     {
    //       type: "img",
    //       src: "imgSrc.png",
    //     },
    //   ],
    // },
    {
      id: 4,
      isDeferred: true,
      editMode: false,
      name: "Testomontre",
      image:
        "http://pollardy.dev.devloop.pro/storage/product/5efb0d0f2cbee1593511183_316x448_1.jpg",
      price: 0,
      type: "polardi",
      typeValue: "Grace of your love",
      sizes: [
        { label: "Size 1", value: 750 },
        { label: "Size 2", value: 500 },
        { label: "Size 3", value: 250 },
      ],
      colors: [
        { label: "Color 1", value: 750 },
        { label: "Color 2", value: 500 },
        { label: "Color 3", value: 250 },
      ],
      counts: [
        { label: 1, value: 1 },
        { label: 2, value: 2 },
        { label: 3, value: 3 },
      ],
      chosenSize: { label: "Size 1", value: "1100" },
      chosenColor: { label: "Color 1", value: "100" },
      chosenCount: { label: 1, value: 1 },
      additionalFeatures: {
        options: [
          { label: "C вышивкой $(750)", value: 750 },
          { label: "C полувышивкой $(500)", value: 500 },
          { label: "C наклейкой вышивки $(250)", value: 250 },
        ],
        selectedOptions: [],
      },
      commentaries: "бюст-85, талия-60, бедра-93",
      attachments: [
        {
          type: "img",
          src: "imgSrc.jpg",
        },
        {
          type: "img",
          src: "imgSrc.png",
        },
      ],
    },
    // {
    //   id: 5,
    //   isDeferred: true,
    //   name: "Hiroshito",
    //   image:
    //     "http://pollardy.dev.devloop.pro/storage/product/gallery/5efb1d57142041593515351_442x624_1.jpg",
    //   price: "12050",
    //   type: "polardi",
    //   typeValue: "Grace of your love",
    //   sizes: [
    //     { label: "Size 1", value: 750 },
    //     { label: "Size 2", value: 500 },
    //     { label: "Size 3", value: 250 },
    //   ],
    //   colors: [
    //     { label: "Color 1", value: 750 },
    //     { label: "Color 2", value: 500 },
    //     { label: "Color 3", value: 250 },
    //   ],
    //   counts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    //   chosenSize: {},
    //   chosenColor: {},
    //   chosenCount: 1,
    //   additionalFeatures: {
    //     options: [
    //       { label: "C вышивкой $(750)", value: 750 },
    //       { label: "C полувышивкой $(500)", value: 500 },
    //       { label: "C наклейкой вышивки $(250)", value: 250 },
    //     ],
    //     selectedOptions: [],
    //   },
    //   commentaries: "бюст-85, талия-60, бедра-93",
    //   attachments: [
    //     {
    //       type: "img",
    //       src: "imgSrc.jpg",
    //     },
    //     {
    //       type: "img",
    //       src: "imgSrc.png",
    //     },
    //   ],
    // },
  ],
};
