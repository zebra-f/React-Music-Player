import { v4 as uuidv4 } from "uuid";

const songData = () => {
  return [
    {
      id: uuidv4(),
      artist: "Parkbench Epiphany",
      title: "Everlight",
      album: "Antimidas",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27501",
      colors: ["#0C131B", "#926873"],
      active: true,
    },
    {
      id: uuidv4(),
      artist: "Parkbench Epiphany",
      title: "Waybackwhen",
      album: "Antimidas",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27502",
      colors: ["#0C131B", "#926873"],
      active: false,
    },
    {
      id: uuidv4(),
      artist: "Aviino",
      title: "Jasmine",
      album: "Cocoon",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23065",
      colors: ["#FBBB75", "#40525E"],
      active: false,
    },
    {
      id: uuidv4(),
      artist: "Aviino",
      title: "I Miss The Magic",
      album: "Cocoon",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23315",
      colors: ["#FBBB75", "#40525E"],
      active: false,
    },
    {
      id: uuidv4(),
      artist: "Sleepy Fish",
      title: "Tournament Arc",
      album: "Like the Sky, or Something Else",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24824",
      colors: ["#81ABD5", "#0F86E0"],
      active: false,
    },
    {
      id: uuidv4(),
      artist: "Sleepy Fish",
      title: "Getting Soup",
      album: "Like the Sky, or Something Else",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24832",
      colors: ["#81ABD5", "#0F86E0"],
      active: false,
    },
    {
      id: uuidv4(),
      artist: "Delayde, anybodyy",
      title: "Blue",
      album: "Inside a Saltwater Room ",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23195",
      colors: ["#EE94DC", "#C0E6F3"],
      active: false,
    },
  ];
};

export default songData;
