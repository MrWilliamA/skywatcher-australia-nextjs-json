export const questions = [
  {
    question: "Will a telescope work without an eyepiece?",
    answer:
      "Not for visual purposes, as the eye cannot process the real image made by the objective. The telescope may be used without an eyepiece for camera and other instruments.",
  },
  {
    question: "How much magnification can I use with my telescope?",
    answer:
      "Every telescope is different, but a rough rule of thumb is 30-50X per inch diameter of the objective. A good refractor may, however, use 100X/inch on bright objects, so this is not a hard rule. You can always increase the magnification above these limits, but it is pointless if you’re not seeing more. This rule breaks down for larger instruments, as the distortion of the atmosphere limits practical magnification to 300X.",
  },
  {
    question: "Which eyepiece design is best?",
    answer:
      "<p>The performance of different eyepiece design  varies with different telescopes. Different eyepiece designs have various characteristics. For example, an expensive widefield design is not required for planetary viewing, where the only important thing is maximum contrast. A Plossl or Orthoscopic would probably be best, but almost all designs are good performers on-axis for any f/ratio.</p><p>Telescopes with F/ratios>10 are quite tolerant of simple low element eyepieces up to 55 deg. A.F., but telescopes <6 are a different matter. Off-axis performance requires powerful correction to properly image the highly convergent beam. Each eyepiece and telescope performs as a system, and their image can only be evaluated as much.</p>",
  },
  {
    question: "Why are some eyepiece more expensive than others?",
    answer:
      "<p>When you pay more for an eyepiece you are usually paying for:</p><p><strong>Field of view:</strong> Eyepieces that have many lenses to correct for the five major aberration (these aberrations give increasingly worse, the lower the focal ratio of the telescope) have obviously higher costs in lenses and coatings.</p><p><strong>Eye relief:</strong> Using larger, more expensive elements in eyepieces allows for a greater distance between the eyes and eyepiece.</p><p><strong>Coatings:</strong> 2-layer multicoatings on both faces of all lenses will typically add 25% to the cost of an eyepiece, but this is absolutely necessary to preserve the contrast of the image when the light has to go through 7-9 lenses.</p>",
  },
  {
    question: "Why is the image better at the centre of the field?",
    answer:
      "All commercial eyepieces are made with spherical elements, as these are the only type that are easily mass produced. These naturally produce aberrations, which become much worse in highly convergent light beams. There is no way to avoid all aberrations when using spherical elements. Clever eyepiece designer can, however, minimise the objectionable ones and cause others to manifest themselves in an acceptable form.",
  },

  {
    question: "What is the “Kidney Bean Effect”?",
    answer:
      "The “Kidney Bean Effect” is not the same phenomenon as the before mentioned “black spot”. In some long f.l or wide angle eyepieces, it is sometimes necessary to move the eye closer to the eyepiece in order to see the edge of the field. Sometimes, when this occurs, parts of the field between the centre and the edge are cut off, as part of the quickly converging beam misses the eye’s pupil. This appears to the observer as a giant kidney bean shaped dark region that meanders around the field as head moves.",
  },

  {
    question: "Do anit-reflection coatings improve light transmission?",
    answer:
      "Yes. Conventional thought seems to be that all the light not reflected is transmitted through to the next medium. This is critical to the performance of high-element wide angle designs with many refractive surfaces.",
  },

  {
    question: "How many eyepieces should I have?",
    answer:
      "<p>Eyepieces are the most critical factor concerning the performance of your telescope, excepting a dark sky. Eyepieces create the image your eye will see, and the right ones will give you the experience that makes amateur astronomy so rewarding. Even the best instrument will never perform to it’s potential visually with poor oculars.</p><p>Most manufacturers sell their telescopes with inexpensive ones, and since most people selling a telescope keep their good eyepieces, the aftermarket is your best source. Borrow as many as you can and try them out; for every object there will be an eyepiece that works best with your particular telescope. You should be satisfied with 5-8 good eyepieces; and you’ll use your telescope much more often with good ones.</p>",
  },

  {
    question: "What is an Exit Pupil?",
    answer:
      "<p>Exit Pupil is the size of the light beam the eyepiece projects into your eye. Exit pupil can be calculated as follows: Aperture / Magnification = Exit Pupil</p><p>Most night adapted eyes open to 5-7mm, so it’s not a good idea to use eyepieces which give an exit pupil much larger than this, as the beam won’t fit into entrance pupil of your eye.</p>",
  },
  {
    question: "Will I see objects as they appear in photographs?",
    answer:
      "Yes and no. Bright objects like the Moon, some planets and some star clusters will show colours and features just like photographs, but faint objects are more difficult. The eye is not sensitive enough to detect colour at low light levels so even bright nebulae appear as shades of gray in small telescopes. Colour films can be exposed long enough to collect light across the visible spectrum so photographs show colours than you don’t see visually.",
  },

  {
    question: "Should I get a motor drive with my equatorial mount?",
    answer:
      "A motor drive is necessary for many types of astrophotography, but it is more than just a convenience for visual observation as well. At 200x magnification, the Earth’s rotation will move an object out of your field of view in about two seconds. A Right Ascension motor drive will keep an object in the centre of the field where the image is the best without producing the objectionable vibrations experienced with manual tracking. Adding a Declination motor drive and a hand controller allows you to guide for astrophotography.",
  },
  {
    question: "Should I use colour filters?",
    answer:
      "Colour filters, which usually thread into the eyepiece barrel, are almost a necessity for viewing planetary detail. By using an appropriate colour, you can highlight a specific planetary feature. This often allows you see two to three times as much detail as in an unfiltered view.",
  },
  {
    question: "How do i use the WiFi adapter?",
    answer:
      "<p>The WiFi adapter gives your Sky-Watcher GOTO mount WiFi capability. With the adapter plugged, in you can connect the mount to the SynScan App and use your mobile device to control and align your telescope.</p><p><strong>Connect:</strong> Power on mount and use your mobile device to join the SynScan Wi-Fi network. Open the app and tap the Connect button.</p><p><strong>Slewing the Mount: </strong>Use the 8-way direction buttons to command the mount to rotate (slew).The number at the centre of the buttons indicate the slewing speed.<p><strong>Align the Finder Scope: </strong>Point the primary telescope to a fixed target. Identify the object at the centre of the eyepiece and adjust screws on the finder scope until the reticle also points to the same object.</p><p><strong>Mount Alignment Scope: </strong> Tap the Alignment icon, choose an alignment method and select the alignment stars. During alignment, use the 8-way slew buttons to first centre the alignment star in the finder scope and then in the primary telescope. Tap the confirmation button when done; note that the app requires the last slewing direction to be up and right before tapping.</p><p><strong>GOTO: </strong> Tap the Star or Deep Sky icon and select an object from the catalogs. Tap GoTo and the mount will point to it. You can use User Objects to specify an object not in the apps catalogue.  After completing the GOTO for an object, you can centre it in the telescope’s eyepiece and then tap. This is optional but doing so allows subsequent GOTO for targets near this object to be more accurate.</p>",
  },
  {
    question: "What is Apparent Field?",
    answer:
      "Apparent Field (A.F.) is the angle viewed by the eye when looking into the eyepiece. An eye by itself has an A.F. of about 100 degrees, so any well corrected design up to this value would be a benefit.",
  },
  {
    question: "My high power eyepiece is fuzzy. What’s wrong with it?",
    answer:
      "There’s probably nothing wrong with the eyepiece: you have probably exceeded the resolving power of your telescope. A television set looks clear 10 metres away, but up close you can see the imperfections.",
  },
  {
    question: "Is high magnification better?",
    answer:
      "<p>Only for some objects, although under-magnification is often a problem, even for experienced observers. The penalty for increased magnification is reduced field of view and brightness; faint objects grow fainter as the magnification is increased.</p><p>This is why larger aperture telescopes are so effective on faint objects; they provide enough light to stimulate the eye at high magnifications. For example, a 4-inch telescope will only view a globular cluster effectively at 80X, and it will appear as a blob. A 6-inch will resolve the outer stars at 130x, an 8-inch will resolve further in at 200x. 10 and 12.5-inch telescopes will make them glitter to the core at 300 and 400x.</p>",
  },

  {
    question:
      "What is the black spot I see in my reflector eyepiece during daylight?",
    answer:
      "A low powered eyepiece in a reflector produces a large exit pupil with a large image of the secondary mirror obstruction. During the day, when the pupil of the eye is small, if the size of the secondary obstruction image approaches the size of the pupil, it will appear as a darkened region in the centre of the field. At night, when the pupil of the eye is large, the darkened region is not noticed.",
  },

  {
    question: "Which eyepiece should I choose?",
    answer:
      "If brightness is not a factor, choose the eyepiece that will encompass the object, then allow for a suitable backdrop. If you want to know the actual field on view the eyepiece will give (True Field),",
  },

  {
    question:
      "Which works better? An eyepiece or a Barlow+eyepiece giving the same magnification?",
    answer:
      "<p>The only time the eyepiece alone may perform as well, is on-axis, in a high-contrast application, as the extra optics of the barlow may cause a slight depreciation. Optically, for all other sues, the eyepiece+barlow outperforms the eyepiece working alone. The reason? Most of the aberrations caused by positive spherical lenses (Coma, Astigmatism, Curvature of Field and Spherical Aberration) can be reduced and sometimes almost eliminated by introducing a negative system (barlow) which has the same aberrations in negative quantities!</p><p>Spherical aberration of the system is reduced as the positive spherical aberration of the eyepiece is cancelled by the negative spherical aberration of the barlow. The other aberrations cancel in a similar way! This is one of the eyepiece designer’s most powerful weapons, and it is used in most of the shorter focal length ultra-wide designs. Another great benefit of this idea is that the longer eye relief of the longer f.l. eyepiece used with the barlow is retained.</p>",
  },

  {
    question:
      "When I’m observing a bright object like a planet, I see an opposing ghost image. What causes that?",
    answer:
      "<p>The ghost image, and it’s evil twin, the out-of-focus ghost is caused by internal reflections inside the eyepiece. The only way to eliminate these is to eliminate air-spaces in the eyepieces, as the ghost is caused by a double bounce between two lenses in close proximity. While the ghost is an annoyance, the out of focus ghost is more of an enemy, as it reduces overall contrast of the image, which determines how much detail you’ll be able to see.</p><p>The treatment is di-electric multi-coating of the lens-facing surfaces in the eyepiece.</p>",
  },

  {
    question: "How do I find objects in the sky?",
    answer:
      "<p>The sky is mapped out in a spherical coordinate system similar to the system of Latitude and Longitude on the surface of the Earth. On the imaginary celestial sphere, the coordinates are Declination, which is equivalent to Latitude and measured in degrees, and Right Ascension, which is equivalent to Longitude, but measured in hours. The celestial equator is a projection of the Earth’s equator onto the celestial sphere.</p><p>Because the positions of stars and other distant celestial objects, as plotted on this celestial sphere, change very slowly with time, their listed coordinates and star charts are only updated every fifty years. On the other hand, planets change position so rapidly that their coordinates must be obtained from current astronomy periodicals. The setting circles on your equatorial mount can be aligned with the celestial sphere to aid in finding astronomical objects.</p>",
  },

  {
    question: "How do I safely transport my telescope?",
    answer:
      "<p>The telescope can be transported in 2 main parts–telescope tube and mount. Loosen the thumbscrews on the tube rings and remove the telescope tube from the mount. We suggest removing the accessories (finderscope and bracket, and the eyepiece) from the optical tube. Cover the telescope tube and the eyepiece with their caps. It is also convenient to remove the fine-adjustment control cables and counterweight rod/counterweights.</p><p>Accessory tray should be removed in order to transport with the 3 tripod legs closed. The telescope can be transported in a vehicle without a problem. Padded insulation can prevent scratches on the tube but it is not necessary. The mirrors may go out of collimation after a bumpy ride but collimation can be required after transportation anyway, with or without padding.</p>",
  },

  {
    question:
      "I am observing Jupiter but I only see a shimmering disk. What am I doing wrong?",
    answer:
      "Astronomers must be patient; you must optimize your observing site and times, as well as your equipment. When you observe the Moon and the planets, and they appear as though water is running over them, you probably have bad “seeing” because you are observing through turbulent air. Always observe objects as high in the sky as possible. Don’t observe immediately after sunset and avoid viewing across heat-radiating ground objects such as buildings and parking lots. Let your telescope come to temperature with the surrounding air; sometimes the shimmering is due to “tube currents” within the telescope tube. Try to enhance planetary detail by using colour filters. Optimize all that you can then be patient because good seeing comes and goes.",
  },
  {
    question: "How do I store my telescope?",
    answer:
      "It is unnecessary to separate the optical tube and the mount when storing the telescope. It can be stored in one unit in a clean, dry, and dust-free environment. If it has to be stored outdoors, cover it with a heavy-duty plastic cover to prevent it from getting wet. Make sure that the dust cap for the front of the telescope and the cover for the rear opening are on. Accessories should be stored separately in a box, with all their caps on. Some people do store the reflecting telescope in two parts, leaving the telescope tube up side down on the ground to prevent dust from settling down on the primary mirror. However, it is not proven that it really helps.",
  },
];
