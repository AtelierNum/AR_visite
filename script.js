console.log("loading scripts")

// vidateliernum
AFRAME.registerComponent("website", {
  init: function() {
    this.toggle = false;
    document.querySelector("#vidateliernum").pause();
  },
  tick: function() {
    if (document.querySelector("#a-website").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#vidateliernum").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#vidateliernum").pause();
    }
  }
});
// timelapse
AFRAME.registerComponent("timelapse", {
  init: function() {
    this.toggle1 = false;
    document.querySelector("#vidtimelapse").pause();
  },
  tick: function() {
    if (document.querySelector("#a-timelapse").object3D.visible == true) {
      console.log("vu")
      if (!this.toggle1) {
        this.toggle1 = true;
        document.querySelector("#vidtimelapse").play();
      }
    } else {
      this.toggle1 = false;
      document.querySelector("#vidtimelapse").pause();
    }
  }
});
// p5js code accueil
AFRAME.registerComponent("draw-canvas1", {
  init() {
    setTimeout(() => {
      this.el.setAttribute("material", { src: "#test" }); // every element of the scene that has this component will use the canvas ided as "test" for its texture
    }, 500);
  },
  tick() {
    var el = this.el;
    var material;
    material = el.getObject3D("mesh").material;
    if (!material.map) {
      // console.log("no material")
      return;
    } else {
      // console.log("have material")
    }
    material.map.needsUpdate = true;
  }
});
// fondvert
AFRAME.registerComponent("fondvert", {
  init: function() {
    this.toggle = false;
    document.querySelector("#vidfondvert").pause();
  },
  tick: function() {
    if (document.querySelector("#a-fondvert").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#vidfondvert").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#vidfondvert").pause();
    }
  }
});
// prise de vue
AFRAME.registerComponent("photo", {
  init: function() {
    this.toggle = false;
    document.querySelector("#vidphoto").pause();
  },
  tick: function() {
    if (document.querySelector("#a-photo").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#vidphoto").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#vidphoto").pause();
    }
  }
});
// axidraw1
AFRAME.registerComponent("axidraw1", {
  init: function() {
    this.toggle = false;
    document.querySelector("#vidaxidraw1").pause();
  },
  tick: function() {
    if (document.querySelector("#a-axidraw1").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#vidaxidraw1").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#vidaxidraw1").pause();
    }
  }
});
//axidraw2
AFRAME.registerComponent("axidraw2", {
  init: function() {
    this.toggle = false;
    document.querySelector("#vidaxidraw2").pause();
  },
  tick: function() {
    if (document.querySelector("#a-axidraw2").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#vidaxidraw2").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#vidaxidraw2").pause();
    }
  }
});
//axidraw3
AFRAME.registerComponent("axidraw3", {
  init: function() {
    this.toggle = false;
    document.querySelector("#vidaxidraw3").pause();
  },
  tick: function() {
    if (document.querySelector("#a-axidraw3").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#vidaxidraw3").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#vidaxidraw3").pause();
    }
  }
});
// td
AFRAME.registerComponent("td", {
  init: function() {
    this.toggle = false;
    document.querySelector("#vidtd").pause();
  },
  tick: function() {
    if (document.querySelector("#a-td").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#vidtd").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#vidtd").pause();
    }
  }
});
// unity
AFRAME.registerComponent("unity", {
  init: function() {
    this.toggle = false;
    document.querySelector("#vidunity").pause();
  },
  tick: function() {
    if (document.querySelector("#a-unity").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#vidunity").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#vidunity").pause();
    }
  }
});
// cables
AFRAME.registerComponent("cables", {
  init: function() {
    this.toggle = false;
    document.querySelector("#vidcables").pause();
  },
  tick: function() {
    if (document.querySelector("#a-cables").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#vidcables").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#vidcables").pause();
    }
  }
});
// mapping 0
AFRAME.registerComponent("mapping0", {
  init: function() {
    this.toggle = false;
    document.querySelector("#vidmapping0").pause();
  },
  tick: function() {
    if (document.querySelector("#a-mapping0").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#vidmapping0").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#vidmapping0").pause();
    }
  }
});
// mapping 1
AFRAME.registerComponent("mapping1", {
  init: function() {
    this.toggle = false;
    document.querySelector("#vidmapping1").pause();
  },
  tick: function() {
    if (document.querySelector("#a-mapping1").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#vidmapping1").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#vidmapping1").pause();
    }
  }
});
// mapping 2
AFRAME.registerComponent("mapping2", {
  init: function() {
    this.toggle = false;
    document.querySelector("#vidmapping2").pause();
  },
  tick: function() {
    if (document.querySelector("#a-mapping2").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#vidmapping2").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#vidmapping2").pause();
    }
  }
});
// lumiere
AFRAME.registerComponent("lumiere", {
  init: function() {
    this.toggle = false;
    document.querySelector("#lumiere").pause();
  },
  tick: function() {
    if (document.querySelector("#a-lumiere").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#lumiere").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#lumiere").pause();
    }
  }
});
// ml
AFRAME.registerComponent("ml", {
  init: function() {
    this.toggle = false;
    document.querySelector("#ml").pause();
  },
  tick: function() {
    if (document.querySelector("#a-ml").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#ml").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#ml").pause();
    }
  }
});
// arduino0
AFRAME.registerComponent("arduino0", {
  init: function() {
    this.toggle = false;
    document.querySelector("#arduino0").pause();
  },
  tick: function() {
    if (document.querySelector("#a-arduino0").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#arduino0").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#arduino0").pause();
    }
  }
});
// arduino1
AFRAME.registerComponent("arduino1", {
  init: function() {
    this.toggle = false;
    document.querySelector("#arduino1").pause();
  },
  tick: function() {
    if (document.querySelector("#a-arduino1").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#arduino1").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#arduino1").pause();
    }
  }
});
// arduino2
AFRAME.registerComponent("arduino2", {
  init: function() {
    this.toggle = false;
    document.querySelector("#arduino2").pause();
  },
  tick: function() {
    if (document.querySelector("#a-arduino2").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#arduino2").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#arduino2").pause();
    }
  }
});
// arduino3
AFRAME.registerComponent("arduino3", {
  init: function() {
    this.toggle = false;
    document.querySelector("#arduino3").pause();
  },
  tick: function() {
    if (document.querySelector("#a-arduino3").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#arduino3").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#arduino3").pause();
    }
  }
});
// arduino4
AFRAME.registerComponent("arduino4", {
  init: function() {
    this.toggle = false;
    document.querySelector("#arduino4").pause();
  },
  tick: function() {
    if (document.querySelector("#a-arduino4").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#arduino4").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#arduino4").pause();
    }
  }
});
// arduino5
AFRAME.registerComponent("arduino5", {
  init: function() {
    this.toggle = false;
    document.querySelector("#arduino5").pause();
  },
  tick: function() {
    if (document.querySelector("#a-arduino5").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#arduino5").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#arduino5").pause();
    }
  }
});
// arduino6
AFRAME.registerComponent("arduino6", {
  init: function() {
    this.toggle = false;
    document.querySelector("#arduino6").pause();
  },
  tick: function() {
    if (document.querySelector("#a-arduino6").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#arduino6").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#arduino6").pause();
    }
  }
});
// arduino7
AFRAME.registerComponent("arduino7", {
  init: function() {
    this.toggle = false;
    document.querySelector("#arduino7").pause();
  },
  tick: function() {
    if (document.querySelector("#a-arduino7").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#arduino7").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#arduino7").pause();
    }
  }
});

