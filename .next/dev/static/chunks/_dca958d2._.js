(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "error",
    ()=>error,
    "success",
    ()=>success
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const success = (data)=>{
    return {
        success: true,
        data,
        id: crypto.randomUUID()
    };
};
const error = (message)=>{
    return {
        success: false,
        message,
        id: crypto.randomUUID()
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Background",
    ()=>Background
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
const getFileExtension = (url)=>{
    return url.split(".").pop()?.toLowerCase() || "";
};
const isVideo = (extension)=>{
    const videoExtensions = [
        "mp4",
        "webm",
        "ogg",
        "mov",
        "avi",
        "m4v"
    ];
    return videoExtensions.includes(extension);
};
const transitions = [
    'fade',
    'slideLeft',
    'slideRight',
    'zoomIn',
    'zoomOut',
    'dissolve'
];
const getTransitionClasses = (transition, isActive, isExiting)=>{
    const baseClasses = "absolute bg-background left-0 top-0 w-full h-full object-cover transition-all duration-1000 ease-in-out z-0";
    switch(transition){
        case 'fade':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, {
                'opacity-100': isActive && !isExiting,
                'opacity-0': !isActive || isExiting
            });
        case 'slideLeft':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, {
                'translate-x-0 opacity-100': isActive && !isExiting,
                'translate-x-full opacity-0': !isActive && !isExiting,
                '-translate-x-full opacity-0': isExiting
            });
        case 'slideRight':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, {
                'translate-x-0 opacity-100': isActive && !isExiting,
                '-translate-x-full opacity-0': !isActive && !isExiting,
                'translate-x-full opacity-0': isExiting
            });
        case 'zoomIn':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, {
                'scale-100 opacity-100': isActive && !isExiting,
                'scale-75 opacity-0': !isActive && !isExiting,
                'scale-125 opacity-0': isExiting
            });
        case 'zoomOut':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, {
                'scale-100 opacity-100': isActive && !isExiting,
                'scale-125 opacity-0': !isActive && !isExiting,
                'scale-75 opacity-0': isExiting
            });
        case 'dissolve':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, {
                'opacity-100 blur-0': isActive && !isExiting,
                'opacity-0 blur-sm': !isActive || isExiting
            });
        default:
            return baseClasses;
    }
};
const VideoWithPlaceholder = ({ src, className, placeholder, isActive, onVideoEnded })=>{
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [videoLoaded, setVideoLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoWithPlaceholder.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "development") === "development" && !placeholder) {
                console.warn("No placeholder provided for video");
            }
        }
    }["VideoWithPlaceholder.useEffect"], [
        placeholder
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoWithPlaceholder.useEffect": ()=>{
            const video = videoRef.current;
            if (video) {
                const handleLoadedData = {
                    "VideoWithPlaceholder.useEffect.handleLoadedData": ()=>{
                        setVideoLoaded(true);
                    }
                }["VideoWithPlaceholder.useEffect.handleLoadedData"];
                const handleCanPlay = {
                    "VideoWithPlaceholder.useEffect.handleCanPlay": ()=>{
                        setVideoLoaded(true);
                    }
                }["VideoWithPlaceholder.useEffect.handleCanPlay"];
                const handleEnded = {
                    "VideoWithPlaceholder.useEffect.handleEnded": ()=>{
                        if (isActive && onVideoEnded) {
                            onVideoEnded();
                        }
                    }
                }["VideoWithPlaceholder.useEffect.handleEnded"];
                video.addEventListener("loadeddata", handleLoadedData);
                video.addEventListener("canplay", handleCanPlay);
                video.addEventListener("ended", handleEnded);
                video.load();
                if (video.readyState >= 2) {
                    setVideoLoaded(true);
                }
                return ({
                    "VideoWithPlaceholder.useEffect": ()=>{
                        video.removeEventListener("loadeddata", handleLoadedData);
                        video.removeEventListener("canplay", handleCanPlay);
                        video.removeEventListener("ended", handleEnded);
                    }
                })["VideoWithPlaceholder.useEffect"];
            }
        }
    }["VideoWithPlaceholder.useEffect"], [
        src,
        isActive,
        onVideoEnded
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoWithPlaceholder.useEffect": ()=>{
            const video = videoRef.current;
            if (video && videoLoaded) {
                if (isActive) {
                    video.currentTime = 0; // Recommencer depuis le début
                    video.play();
                } else {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        }
    }["VideoWithPlaceholder.useEffect"], [
        videoLoaded,
        isActive
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            placeholder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: placeholder,
                loading: "eager",
                priority: true,
                sizes: "100vw",
                alt: "Background placeholder",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className, {
                    invisible: videoLoaded
                }),
                quality: 100,
                style: {
                    objectFit: 'cover',
                    objectPosition: 'center'
                },
                fill: true
            }, void 0, false, {
                fileName: "[project]/components/background.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                src: src,
                muted: true,
                playsInline: true,
                loop: false,
                controls: false,
                preload: "auto",
                style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className, {
                    invisible: !videoLoaded
                })
            }, void 0, false, {
                fileName: "[project]/components/background.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(VideoWithPlaceholder, "QGL2aANuHns41zX7mdgng3Tbx6I=");
_c = VideoWithPlaceholder;
const BackgroundMedia = ({ item, className, isActive, onVideoEnded })=>{
    _s1();
    const extension = getFileExtension(item.src);
    const isVideoFile = isVideo(extension);
    if (isVideoFile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoWithPlaceholder, {
            src: item.src,
            className: className,
            placeholder: item.placeholder,
            isActive: isActive,
            onVideoEnded: onVideoEnded
        }, void 0, false, {
            fileName: "[project]/components/background.tsx",
            lineNumber: 198,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Pour les images, simuler une "fin" après une durée fixe
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackgroundMedia.useEffect": ()=>{
            if (isActive && onVideoEnded) {
                const timer = setTimeout({
                    "BackgroundMedia.useEffect.timer": ()=>{
                        onVideoEnded();
                    }
                }["BackgroundMedia.useEffect.timer"], 5000); // 5 secondes pour les images
                return ({
                    "BackgroundMedia.useEffect": ()=>clearTimeout(timer)
                })["BackgroundMedia.useEffect"];
            }
        }
    }["BackgroundMedia.useEffect"], [
        isActive,
        onVideoEnded
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        priority: true,
        loading: "eager",
        src: item.src,
        alt: "Background",
        className: className,
        sizes: "100vw",
        style: {
            objectFit: 'cover',
            objectPosition: 'center'
        },
        fill: true
    }, void 0, false, {
        fileName: "[project]/components/background.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(BackgroundMedia, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c1 = BackgroundMedia;
const Background = ({ items, enableTransitions = true, imageDuration = 5000 })=>{
    _s2();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [nextIndex, setNextIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTransition, setCurrentTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('fade');
    // Si un seul élément, pas besoin de carousel
    const isSingleItem = items.length <= 1;
    const handleMediaEnded = ()=>{
        if (isSingleItem || !enableTransitions || isTransitioning) return;
        setIsTransitioning(true);
        // Choisir une transition aléatoire
        const randomTransition = transitions[Math.floor(Math.random() * transitions.length)];
        setCurrentTransition(randomTransition);
        // Après la transition, mettre à jour les index
        setTimeout(()=>{
            setCurrentIndex(nextIndex);
            setNextIndex((nextIndex + 1) % items.length);
            setIsTransitioning(false);
        }, 1000); // Durée de la transition
    };
    // Réinitialiser les index si les items changent
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Background.useEffect": ()=>{
            setCurrentIndex(0);
            setNextIndex(items.length > 1 ? 1 : 0);
            setIsTransitioning(false);
        }
    }["Background.useEffect"], [
        items
    ]);
    if (items.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-background z-0"
        }, void 0, false, {
            fileName: "[project]/components/background.tsx",
            lineNumber: 278,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (isSingleItem) {
        const baseClasses = "absolute bg-background left-0 top-0 w-full h-full object-cover z-0";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundMedia, {
            item: items[0],
            className: baseClasses,
            isActive: true,
            onVideoEnded: handleMediaEnded
        }, void 0, false, {
            fileName: "[project]/components/background.tsx",
            lineNumber: 284,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 w-full h-full overflow-hidden z-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40 z-10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/background.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-full h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundMedia, {
                        item: items[currentIndex],
                        className: getTransitionClasses(currentTransition, true, isTransitioning),
                        isActive: !isTransitioning,
                        onVideoEnded: handleMediaEnded
                    }, void 0, false, {
                        fileName: "[project]/components/background.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundMedia, {
                        item: items[nextIndex],
                        className: getTransitionClasses(currentTransition, isTransitioning, false),
                        isActive: isTransitioning,
                        onVideoEnded: ()=>{}
                    }, void 0, false, {
                        fileName: "[project]/components/background.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/background.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/background.tsx",
        lineNumber: 294,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(Background, "r7HC3LcyLNsk94JkiRjJytP/Jms=");
_c2 = Background;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "VideoWithPlaceholder");
__turbopack_context__.k.register(_c1, "BackgroundMedia");
__turbopack_context__.k.register(_c2, "Background");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors-and-shadows duration-300 ease-out focus-visible:outline-none focus-visible:border-border/15 focus-visible:ring-1 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-foreground/20 focus-visible:shadow-button-hover disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-6 [&_svg]:shrink-0 disabled:cursor-not-allowed", {
    variants: {
        variant: {
            default: "border border-border/50 hover:border-border/15 bg-primary/20 focus-visible:bg-primary/30 hover:bg-primary/30 backdrop-blur-sm text-primary ring-1 ring-offset-primary/10 ring-border/10 ring-offset-2 hover:ring-primary/15 hover:ring-offset-4 hover:ring-offset-black/20 shadow-button hover:shadow-button-hover",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            iconButton: "border border-border/50 hover:border-border/15 bg-primary disabled:bg-primary/40 hover:bg-primary backdrop-blur-sm disabled:text-primary-foreground/50 text-primary-foreground ring-1 ring-offset-transparent ring-transparent ring-offset-2 hover:ring-primary/15 hover:ring-offset-4 hover:ring-offset-black/20 shadow-button hover:shadow-button-hover"
        },
        size: {
            sm: "h-8 px-3 text-xs",
            default: "h-9 px-4 py-2",
            lg: "h-10 px-8",
            icon: "size-9",
            "icon-lg": "size-10",
            "icon-xl": "size-11"
        },
        shine: {
            true: "relative overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:animate-shine after:pointer-events-none"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default",
        shine: false
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, shine, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className,
            shine
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 49,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/icons/x.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XLogoIcon",
    ()=>XLogoIcon,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const XLogoIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            stroke: "currentColor",
            strokeWidth: 2,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 5h6l14 22h-6L6 5ZM14.235 17.941 6 27.001M26 5l-8.235 9.059"
            }, void 0, false, {
                fileName: "[project]/components/icons/x.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/icons/x.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/x.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = XLogoIcon;
const __TURBOPACK__default__export__ = XLogoIcon;
var _c;
__turbopack_context__.k.register(_c, "XLogoIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TABLES",
    ()=>TABLES,
    "socialLinks",
    ()=>socialLinks
]);
const TABLES = {
    EMAIL_LIST: "email-list"
};
const socialLinks = {
    instagram: "https://www.instagram.com/joyco.studio",
    x: "https://x.com/joyco_studio",
    github: "https://github.com/joyco-studio"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/scrolling-logos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
const ScrollingLogos = ({ logos, speed = "normal", direction = "left", className })=>{
    const speedMap = {
        slow: "30s",
        normal: "20s",
        fast: "10s"
    };
    const animationDirection = direction === "left" ? "reverse" : "normal";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex overflow-hidden", className),
                style: {
                    "--duration": speedMap[speed]
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex shrink-0 animate-marquee",
                    style: {
                        animationDirection: animationDirection,
                        animationDuration: "var(--duration)"
                    },
                    children: [
                        ...Array(3)
                    ].map((_, setIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex shrink-0",
                            children: logos.map((logo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-8 flex items-center whitespace-nowrap",
                                    children: logo.svg ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fill-current", logo.height),
                                        dangerouslySetInnerHTML: {
                                            __html: logo.svg
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/scrolling-logos.tsx",
                                        lineNumber: 54,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)) : logo.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: logo.image || "/placeholder.svg",
                                        alt: logo.name,
                                        className: logo.height
                                    }, void 0, false, {
                                        fileName: "[project]/components/scrolling-logos.tsx",
                                        lineNumber: 56,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)) : null
                                }, `${setIndex}-${logo.id}`, false, {
                                    fileName: "[project]/components/scrolling-logos.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, `set-${setIndex}`, false, {
                            fileName: "[project]/components/scrolling-logos.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/scrolling-logos.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/scrolling-logos.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-transparent to-background opacity-0"
            }, void 0, false, {
                fileName: "[project]/components/scrolling-logos.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-transparent via-transparent to-background opacity-0"
            }, void 0, false, {
                fileName: "[project]/components/scrolling-logos.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/scrolling-logos.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ScrollingLogos;
const __TURBOPACK__default__export__ = ScrollingLogos;
var _c;
__turbopack_context__.k.register(_c, "ScrollingLogos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sample-logos.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sampleLogos",
    ()=>sampleLogos
]);
const sampleLogos = [
    {
        id: "vercel",
        name: "Vercel",
        height: "h-5",
        svg: `<svg width="101" height="20" viewBox="0 0 101 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_22010_49447)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0979 19.9835L11.5906 0.00939941L0.083252 19.9835H23.0979ZM34.7046 19.0743L44.3214 0.917364H40.1617L33.5279 14.1036L26.894 0.917364H22.7344L32.3512 19.0743H34.7046ZM100.243 0.917364V19.0743H96.7991V0.917364H100.243ZM81.0739 12.2973C81.0739 10.8823 81.3698 9.63771 81.9616 8.56365C82.5534 7.48955 83.3786 6.66272 84.4366 6.08306C85.4947 5.50341 86.7325 5.21353 88.1495 5.21353C89.4049 5.21353 90.5349 5.48636 91.5393 6.03191C92.5437 6.57746 93.3418 7.38729 93.9336 8.46134C94.5254 9.53545 94.8306 10.8482 94.8484 12.3996V13.1924H84.706C84.7773 14.3176 85.1092 15.2041 85.701 15.852C86.311 16.4828 87.1273 16.7982 88.1495 16.7982C88.7949 16.7982 89.3872 16.6277 89.9249 16.2868C90.463 15.9458 90.8667 15.4855 91.1356 14.9058L94.6603 15.1615C94.2295 16.4402 93.4225 17.4631 92.2389 18.2303C91.0548 18.9975 89.692 19.3811 88.1495 19.3811C86.7325 19.3811 85.4947 19.0913 84.4366 18.5116C83.3786 17.932 82.5534 17.1051 81.9616 16.031C81.3698 14.9569 81.0739 13.7124 81.0739 12.2973ZM91.2971 11.0187C91.1715 9.91048 90.8219 9.10071 90.2479 8.58921C89.6738 8.06071 88.9746 7.79643 88.1495 7.79643C87.1987 7.79643 86.4277 8.07776 85.8359 8.64036C85.2436 9.20297 84.8763 9.99574 84.7325 11.0187H91.2971ZM75.2632 8.58921C75.8372 9.04955 76.1957 9.68886 76.3394 10.5072L79.8903 10.3282C79.7647 9.28822 79.3974 8.38464 78.7874 7.61741C78.1774 6.85024 77.3886 6.26208 76.4197 5.85289C75.4695 5.42665 74.4203 5.21353 73.2721 5.21353C71.8551 5.21353 70.6178 5.50341 69.5593 6.08306C68.5012 6.66272 67.676 7.48955 67.0842 8.56365C66.4924 9.63771 66.1965 10.8823 66.1965 12.2973C66.1965 13.7124 66.4924 14.9569 67.0842 16.031C67.676 17.1051 68.5012 17.932 69.5593 18.5116C70.6178 19.0913 71.8551 19.3811 73.2721 19.3811C74.4557 19.3811 75.532 19.168 76.5004 18.7418C77.4694 18.2985 78.2581 17.6762 78.8682 16.8749C79.4782 16.0736 79.8455 15.1359 79.971 14.0619L76.3931 13.9084C76.2676 14.812 75.9175 15.511 75.3439 16.0054C74.7698 16.4828 74.0791 16.7215 73.2721 16.7215C72.1604 16.7215 71.2993 16.3379 70.6892 15.5707C70.0797 14.8035 69.7749 13.7124 69.7749 12.2973C69.7749 10.8823 70.0797 9.79117 70.6892 9.02395C71.2993 8.25677 72.1604 7.87319 73.2721 7.87319C74.0436 7.87319 74.7068 8.11186 75.2632 8.58921ZM57.7941 5.51982H60.9988L61.0914 8.12847C61.3188 7.39009 61.6349 6.81668 62.0401 6.40822C62.6275 5.81599 63.4468 5.51982 64.4969 5.51982H65.8056V8.31196H64.4704C63.7225 8.31196 63.1085 8.41348 62.6275 8.61653C62.1647 8.81958 61.8087 9.1411 61.5596 9.5811C61.3282 10.0211 61.2125 10.5795 61.2125 11.2563V19.0743H57.7941V5.51982ZM43.0125 8.56365C42.4206 9.63771 42.1247 10.8823 42.1247 12.2973C42.1247 13.7124 42.4206 14.9569 43.0125 16.031C43.6044 17.1051 44.4294 17.932 45.4877 18.5116C46.5459 19.0913 47.7835 19.3811 49.2004 19.3811C50.7426 19.3811 52.106 18.9975 53.2896 18.2303C54.4737 17.4631 55.2806 16.4402 55.711 15.1615L52.1867 14.9058C51.9179 15.4855 51.5142 15.9458 50.976 16.2868C50.4379 16.6277 49.8461 16.7982 49.2004 16.7982C48.178 16.7982 47.362 16.4828 46.7522 15.852C46.1602 15.2041 45.8284 14.3176 45.7567 13.1924H55.8995V12.3996C55.8813 10.8482 55.5765 9.53545 54.9847 8.46134C54.3929 7.38729 53.5948 6.57746 52.5904 6.03191C51.586 5.48636 50.4561 5.21353 49.2004 5.21353C47.7835 5.21353 46.5459 5.50341 45.4877 6.08306C44.4294 6.66272 43.6044 7.48955 43.0125 8.56365ZM51.299 8.58921C51.8726 9.10071 52.2227 9.91048 52.3482 11.0187H45.7836C45.9271 9.99574 46.2948 9.20297 46.8867 8.64036C47.4786 8.07776 48.2498 7.79643 49.2004 7.79643C50.0253 7.79643 50.7249 8.06071 51.299 8.58921Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_22010_49447">
            <rect width="100.833" height="20" fill="white" transform="translate(0.083252)"/>
          </clipPath>
        </defs>
      </svg>`
    },
    {
        id: "react",
        name: "React",
        height: "h-8",
        svg: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.455-.467-.91-.991-1.36-1.56z" fill="currentColor"/>
      </svg>`
    },
    {
        id: "nextjs",
        name: "Next.js",
        height: "h-5",
        svg: `<svg width="99" height="20" viewBox="0 0 99 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_22010_49454)">
  <path d="M65.771 0.00830078H82.9714V3.16864H76.1482V19.7948H72.7363V3.16864H65.771V0.00830078Z" fill="black"/>
  <path d="M37.4828 0.00830078V3.16864H23.6955V8.25266H34.7833V11.413H23.6955V16.6344H37.4828V19.7948H20.2839V3.16864H20.2825V0.00830078H37.4828Z" fill="black"/>
  <path d="M46.0715 0.0164795H41.6067L57.5986 19.803H62.0764L54.0794 9.91652L62.0636 0.0315753L57.5986 0.0384439L51.844 7.15294L46.0715 0.0164795Z" fill="black"/>
  <path d="M50.6526 14.1501L48.4167 11.3827L41.5935 19.8181H46.0711L50.6526 14.1501Z" fill="black"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4034 19.7947L4.39003 0H0.125488V19.7865H3.53713V4.22935L16.1175 19.7947H20.4034Z" fill="black"/>
  <path d="M83.7383 19.6739C83.4884 19.6739 83.2759 19.5878 83.0979 19.4154C82.92 19.2431 82.832 19.0345 82.8343 18.7873C82.832 18.547 82.92 18.3406 83.0979 18.1683C83.2759 17.996 83.4884 17.9098 83.7383 17.9098C83.9787 17.9098 84.1889 17.996 84.3669 18.1683C84.5473 18.3406 84.6373 18.547 84.6398 18.7873C84.6373 18.9506 84.5957 19.1002 84.5125 19.234C84.427 19.3701 84.3185 19.4767 84.1819 19.5538C84.0478 19.6331 83.9 19.6739 83.7383 19.6739Z" fill="black"/>
  <path d="M89.5613 11.3384H91.0731V17.1365C91.0708 17.6694 90.955 18.1251 90.7287 18.5084C90.4999 18.8916 90.1831 19.184 89.7763 19.3904C89.3718 19.5945 88.8979 19.6988 88.3592 19.6988C87.8667 19.6988 87.4254 19.6104 87.0324 19.438C86.6394 19.2657 86.3274 19.0072 86.0985 18.6671C85.8672 18.3269 85.7539 17.9029 85.7539 17.395H87.2682C87.2705 17.6172 87.3214 17.8099 87.4184 17.9709C87.5154 18.1319 87.6494 18.2543 87.8206 18.3405C87.9938 18.4267 88.1928 18.4698 88.4169 18.4698C88.6597 18.4698 88.8678 18.4199 89.0364 18.3178C89.2051 18.2181 89.3347 18.0684 89.4249 17.8689C89.5126 17.6716 89.559 17.4267 89.5613 17.1365V11.3384Z" fill="black"/>
  <path d="M97.2934 13.6059C97.2566 13.2545 97.0947 12.9801 96.8127 12.7851C96.5282 12.5878 96.1608 12.4903 95.7099 12.4903C95.3934 12.4903 95.1207 12.5379 94.8941 12.6309C94.6675 12.7261 94.4918 12.8531 94.3715 13.0141C94.2515 13.1751 94.1913 13.3588 94.1866 13.5651C94.1866 13.7375 94.2282 13.8871 94.3091 14.0118C94.3901 14.1388 94.4986 14.2454 94.6397 14.3316C94.7783 14.42 94.9332 14.4925 95.1021 14.5515C95.273 14.6105 95.4442 14.6604 95.6152 14.7012L96.4034 14.8939C96.7202 14.9665 97.0277 15.064 97.3212 15.1887C97.6147 15.3111 97.8806 15.4676 98.114 15.6558C98.3476 15.844 98.5325 16.0708 98.6689 16.3361C98.8052 16.6014 98.8746 16.912 98.8746 17.2703C98.8746 17.7532 98.7498 18.1773 98.4977 18.5446C98.2458 18.9097 97.8829 19.1954 97.4067 19.4018C96.9327 19.6059 96.3595 19.7101 95.6846 19.7101C95.0327 19.7101 94.464 19.6104 93.9856 19.4108C93.5048 19.2136 93.1301 18.9233 92.8597 18.5424C92.5893 18.1614 92.4437 17.6966 92.4229 17.1501H93.9209C93.9417 17.4358 94.0342 17.6739 94.1913 17.8666C94.3507 18.0571 94.5587 18.1977 94.8131 18.2929C95.0698 18.3859 95.3563 18.4335 95.6731 18.4335C96.0036 18.4335 96.2949 18.3836 96.5468 18.2861C96.7964 18.1886 96.9929 18.0526 97.134 17.8757C97.2774 17.7011 97.349 17.4948 97.3513 17.2589C97.349 17.0435 97.2841 16.8644 97.1593 16.7238C97.0322 16.5832 96.8566 16.4653 96.6322 16.3701C96.4059 16.2748 96.1422 16.1887 95.8417 16.1138L94.8848 15.8735C94.1936 15.6989 93.6457 15.4336 93.2457 15.0776C92.8437 14.7216 92.6447 14.2499 92.6447 13.6581C92.6447 13.1729 92.7788 12.7466 93.0494 12.3815C93.3174 12.0164 93.685 11.733 94.1497 11.5312C94.6166 11.3271 95.1437 11.2273 95.7307 11.2273C96.3272 11.2273 96.8495 11.3271 97.3004 11.5312C97.7511 11.733 98.105 12.0142 98.3613 12.3724C98.618 12.7307 98.7521 13.1411 98.7591 13.6059H97.2934Z" fill="black"/>
  </g>
  <defs>
  <clipPath id="clip0_22010_49454">
  <rect width="99" height="20" fill="currentColor"/>
  </clipPath>
  </defs>
  </svg>
  `
    },
    {
        id: "tailwind",
        name: "Tailwind CSS",
        height: "h-8",
        svg: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill="currentColor"/>
      </svg>`
    },
    {
        id: "typescript",
        name: "TypeScript",
        height: "h-8",
        svg: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor"/>
      </svg>`
    },
    {
        id: "github",
        name: "GitHub",
        height: "h-8",
        svg: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/>
      </svg>`
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-icons/dist/react-icons.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$x$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/x.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$scrolling$2d$logos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/scrolling-logos.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2d$logos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sample-logos.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-6 items-center absolute bottom-[calc(var(--inset)+0.8rem)] md:bottom-[calc(var(--inset)+1.5rem)] left-1/2 -translate-x-1/2 mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        target: "_blank",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                            size: "icon-xl"
                        }),
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socialLinks"].instagram,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstagramLogoIcon"], {
                            className: "size-6"
                        }, void 0, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        target: "_blank",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                            size: "icon-xl"
                        }),
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socialLinks"].x,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$x$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "size-6"
                        }, void 0, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        target: "_blank",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                            size: "icon-xl"
                        }),
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socialLinks"].github,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GitHubLogoIcon"], {
                            className: "size-6"
                        }, void 0, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/footer.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-6 items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$scrolling$2d$logos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    logos: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sample$2d$logos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleLogos"]
                }, void 0, false, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/footer.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/footer.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/start.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Start",
    ()=>Start
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-icons/dist/react-icons.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const DURATION = 0.3;
const DELAY = DURATION;
const EASE_OUT = "easeOut";
const EASE_OUT_OPACITY = [
    0.25,
    0.46,
    0.45,
    0.94
];
const SPRING = {
    type: "spring",
    stiffness: 60,
    damping: 10,
    mass: 0.8
};
// Textes du carrousel
const carouselTextes = [
    "Gérez vos projets d'etude en toute simplicité",
    "Organisez vos équipes d'etudiants",
    "Suivez vos performances en temps réel",
    "Automatisez vos processus scolaire",
    "Optimisez votre productivité quotidienne",
    "Collaborez sans limites avec vos etudiants"
];
const Start = ()=>{
    _s();
    const [isManifestoOpen, setIsManifestoOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTextIndex, setCurrentTextIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const isInitialRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Carrousel de textes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Start.useEffect": ()=>{
            const interval = setInterval({
                "Start.useEffect.interval": ()=>{
                    setCurrentTextIndex({
                        "Start.useEffect.interval": (prev)=>(prev + 1) % carouselTextes.length
                    }["Start.useEffect.interval"]);
                }
            }["Start.useEffect.interval"], 3000); // Change toutes les 3 secondes
            return ({
                "Start.useEffect": ()=>clearInterval(interval)
            })["Start.useEffect"];
        }
    }["Start.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Start.useEffect": ()=>{
            return ({
                "Start.useEffect": ()=>{
                    isInitialRender.current = false;
                }
            })["Start.useEffect"];
        }
    }["Start.useEffect"], [
        isManifestoOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Start.useEffect": ()=>{
            const handleKeyDown = {
                "Start.useEffect.handleKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        setIsManifestoOpen(false);
                    }
                }
            }["Start.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "Start.useEffect": ()=>{
                    window.removeEventListener("keydown", handleKeyDown);
                }
            })["Start.useEffect"];
        }
    }["Start.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex overflow-hidden relative flex-col gap-4 justify-center items-center pt-10 w-full h-full short:lg:pt-10 pb-footer-safe-area 2xl:pt-footer-safe-area px-sides short:lg:gap-4 lg:gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layout: "position",
                transition: {
                    duration: DURATION,
                    ease: EASE_OUT
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "font-serif text-5xl italic short:lg:text-8xl sm:text-8xl lg:text-8xl text-white text-center",
                    style: {
                        textShadow: '0 3px 6px rgba(0, 0, 0, 0.6), 0 6px 12px rgba(0, 0, 0, 0.4), 0 12px 24px rgba(0, 0, 0, 0.2)'
                    },
                    children: "G20"
                }, void 0, false, {
                    fileName: "[project]/components/start.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/start.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center min-h-0 shrink",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresenceGuard, {
                    children: [
                        !isManifestoOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: isInitialRender.current ? false : "hidden",
                            animate: "visible",
                            exit: "exit",
                            variants: {
                                visible: {
                                    scale: 1,
                                    transition: {
                                        delay: DELAY,
                                        duration: DURATION,
                                        ease: EASE_OUT
                                    }
                                },
                                hidden: {
                                    scale: 0.9,
                                    transition: {
                                        duration: DURATION,
                                        ease: EASE_OUT
                                    }
                                },
                                exit: {
                                    y: -150,
                                    scale: 0.9,
                                    transition: {
                                        duration: DURATION,
                                        ease: EASE_OUT
                                    }
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-8 w-full max-w-2xl items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: isInitialRender.current ? false : {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: DURATION,
                                            ease: EASE_OUT,
                                            delay: DELAY
                                        },
                                        className: "relative w-full max-w-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative bg-black/70 backdrop-blur-lg border border-white/30 rounded-full px-1 py-1 flex items-center overflow-hidden shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 px-4 py-2 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                        mode: "wait",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 5
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            exit: {
                                                                opacity: 0,
                                                                y: -5
                                                            },
                                                            transition: {
                                                                duration: 0.6,
                                                                ease: "easeInOut"
                                                            },
                                                            className: "text-white text-sm sm:text-base font-normal text-center",
                                                            style: {
                                                                textShadow: '0 1px 4px rgba(0, 0, 0, 0.8)'
                                                            },
                                                            children: carouselTextes[currentTextIndex]
                                                        }, currentTextIndex, false, {
                                                            fileName: "[project]/components/start.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/start.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/start.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: isInitialRender.current ? false : {
                                                        opacity: 0,
                                                        scale: 0.8
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        scale: 1
                                                    },
                                                    transition: {
                                                        duration: DURATION,
                                                        ease: EASE_OUT,
                                                        delay: DELAY + 0.1
                                                    },
                                                    className: "flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/auth/login",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            size: "sm",
                                                            className: "px-4 py-2 text-sm font-medium bg-white text-black hover:bg-gray-100 rounded-full transition-all duration-300 shadow-md",
                                                            children: "Prêt !"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/start.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/start.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/start.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/start.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/start.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        initial: isInitialRender.current ? false : {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0,
                                            transition: {
                                                duration: DURATION,
                                                ease: EASE_OUT_OPACITY
                                            }
                                        },
                                        transition: {
                                            duration: DURATION,
                                            ease: EASE_OUT,
                                            delay: DELAY + 0.2
                                        },
                                        className: "text-base short:lg:text-lg sm:text-lg lg:text-xl !leading-[1.1] font-medium text-center text-white text-pretty max-w-lg",
                                        style: {
                                            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.1)'
                                        },
                                        children: "Découvrez une nouvelle façon de gérer vos projets et optimiser vos processus avec G20."
                                    }, void 0, false, {
                                        fileName: "[project]/components/start.tsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/start.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, "main-content", false, {
                            fileName: "[project]/components/start.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            layout: "position",
                            transition: SPRING,
                            className: isManifestoOpen ? "my-6" : "mt-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative px-8"),
                                onClick: ()=>setIsManifestoOpen(!isManifestoOpen),
                                shine: !isManifestoOpen,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        animate: {
                                            x: isManifestoOpen ? -16 : 0
                                        },
                                        transition: {
                                            duration: DURATION,
                                            ease: EASE_OUT
                                        },
                                        className: "inline-block",
                                        children: "À propos"
                                    }, void 0, false, {
                                        fileName: "[project]/components/start.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isManifestoOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                                            variant: "iconButton",
                                            size: "icon"
                                        }), "absolute -top-px -right-px aspect-square"),
                                        initial: {
                                            opacity: 0,
                                            scale: 0.8,
                                            rotate: -40
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1,
                                            rotate: 0
                                        },
                                        transition: {
                                            duration: DURATION,
                                            ease: EASE_OUT,
                                            delay: DELAY
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cross1Icon"], {
                                            className: "size-5 text-primary-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/components/start.tsx",
                                            lineNumber: 223,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/start.tsx",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/start.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, "button", false, {
                            fileName: "[project]/components/start.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        isManifestoOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: "hidden",
                            animate: "visible",
                            exit: "exit",
                            variants: {
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        delay: DELAY,
                                        duration: DURATION,
                                        ease: EASE_OUT
                                    }
                                },
                                hidden: {
                                    opacity: 0,
                                    scale: 0.9,
                                    transition: {
                                        duration: DURATION,
                                        ease: EASE_OUT
                                    }
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.9,
                                    transition: {
                                        duration: DURATION,
                                        ease: EASE_OUT_OPACITY
                                    }
                                }
                            },
                            className: "relative flex min-h-0 flex-shrink overflow-hidden text-sm md:text-base max-h-[calc(70dvh-var(--footer-safe-area))] flex-col gap-8 text-center backdrop-blur-xl text-balance border-2 border-border/50 bg-primary/20 max-w-3xl text-foreground rounded-3xl ring-1 ring-offset-primary/10 ring-border/10 ring-offset-2 shadow-button",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "relative overflow-y-auto italic p-6 h-full [&_p]:my-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "\"Nous nous trouvons à l'avant-garde d'une nouvelle ère, où la créativité rencontre la technologie pour redéfinir ce qui est possible. Notre mission est d'autonomiser les individus et les entreprises avec des solutions révolutionnaires qui inspirent le changement et stimulent le progrès."
                                    }, void 0, false, {
                                        fileName: "[project]/components/start.tsx",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Nous croyons en l'innovation constante, repoussant les limites pour créer des produits qui ne sont pas seulement des outils, mais des catalyseurs de transformation. Nous valorisons la simplicité, concevant des expériences intuitives qui rendent les tâches complexes sans effort et agréables."
                                    }, void 0, false, {
                                        fileName: "[project]/components/start.tsx",
                                        lineNumber: 266,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Notre engagement envers la durabilité nous pousse à protéger notre planète tout en offrant une valeur exceptionnelle. Nous favorisons la collaboration, construisant une communauté de penseurs, créateurs et acteurs qui partagent une vision pour un avenir meilleur."
                                    }, void 0, false, {
                                        fileName: "[project]/components/start.tsx",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Notre promesse est de livrer une technologie de pointe qui soit accessible, fiable et adaptée aux besoins de nos utilisateurs. Rejoignez-nous dans ce voyage alors que nous innovons, inspirons et allumons l'étincelle de créativité dans chaque coin du globe.\""
                                    }, void 0, false, {
                                        fileName: "[project]/components/start.tsx",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/start.tsx",
                                lineNumber: 258,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, "manifesto", false, {
                            fileName: "[project]/components/start.tsx",
                            lineNumber: 230,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/start.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/start.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/start.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Start, "O2MmCMuIZToNcbOsMEIze9L0a14=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Start;
const AnimatePresenceGuard = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "popLayout",
        propagate: true,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/start.tsx",
        lineNumber: 294,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = AnimatePresenceGuard;
var _c, _c1;
__turbopack_context__.k.register(_c, "Start");
__turbopack_context__.k.register(_c1, "AnimatePresenceGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/background.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$start$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/start.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const backgroundItems = [
    {
        // Vidéo technologie - Code programming
        src: "/motion_logo1.mp4",
        placeholder: "/tech-placeholder.png"
    },
    {
        // Vidéo business - Team meeting
        src: "/videos/motion_logo2.mp4",
        placeholder: "/business-placeholder.png"
    },
    {
        // Vidéo données - Analytics dashboard
        src: "/videos/motion_logo3.mp4",
        placeholder: "/data-placeholder.png"
    },
    {
        // Vidéo innovation - City skyline tech
        src: "/videos/motion_logo4.mp4",
        placeholder: "/innovation-placeholder.png"
    },
    {
        // Vidéo workspace - Office moderne
        src: "/videos/motion_logo5.mp4",
        placeholder: "/workspace-placeholder.png"
    },
    {
        // Vidéo digital - Network connections
        src: "/videos/motion_logo6.mp4",
        placeholder: "/digital-placeholder.png"
    }
];
function HomeLayout() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "h-[100dvh] w-full relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Background"], {
                items: backgroundItems,
                enableTransitions: true,
                imageDuration: 5000
            }, void 0, false, {
                fileName: "[project]/components/home-page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 p-4 md:p-8 h-full w-full flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$start$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Start"], {}, void 0, false, {
                            fileName: "[project]/components/home-page.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home-page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                        fileName: "[project]/components/home-page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home-page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home-page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = HomeLayout;
var _c;
__turbopack_context__.k.register(_c, "HomeLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/welcome/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home-page.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Home() {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fadeOut, setFadeOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fadeIn, setFadeIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVideoLoaded, setIsVideoLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const video = videoRef.current;
            if (!video) return;
            const handleLoadedData = {
                "Home.useEffect.handleLoadedData": ()=>{
                    setIsVideoLoaded(true);
                    video.play().catch({
                        "Home.useEffect.handleLoadedData": (error)=>{
                            console.error("Erreur lors de la lecture de la vidéo:", error);
                        }
                    }["Home.useEffect.handleLoadedData"]);
                }
            }["Home.useEffect.handleLoadedData"];
            const handleEnded = {
                "Home.useEffect.handleEnded": ()=>{
                    // La vidéo est terminée
                    setFadeOut(true);
                    setTimeout({
                        "Home.useEffect.handleEnded": ()=>{
                            setIsLoading(false);
                            setFadeIn(true);
                        }
                    }["Home.useEffect.handleEnded"], 1000); // Wait for fade transition to complete
                }
            }["Home.useEffect.handleEnded"];
            const handleError = {
                "Home.useEffect.handleError": ()=>{
                    console.error("Erreur lors du chargement de la vidéo");
                    // En cas d'erreur, passer à la page d'accueil après 7 secondes
                    setTimeout({
                        "Home.useEffect.handleError": ()=>{
                            setFadeOut(true);
                            setTimeout({
                                "Home.useEffect.handleError": ()=>{
                                    setIsLoading(false);
                                    setFadeIn(true);
                                }
                            }["Home.useEffect.handleError"], 1000);
                        }
                    }["Home.useEffect.handleError"], 7000);
                }
            }["Home.useEffect.handleError"];
            video.addEventListener('loadeddata', handleLoadedData);
            video.addEventListener('ended', handleEnded);
            video.addEventListener('error', handleError);
            return ({
                "Home.useEffect": ()=>{
                    video.removeEventListener('loadeddata', handleLoadedData);
                    video.removeEventListener('ended', handleEnded);
                    video.removeEventListener('error', handleError);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden",
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-50 transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center bg-black overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        className: "absolute min-w-full min-h-full w-auto h-auto object-cover",
                        autoPlay: true,
                        muted: true,
                        playsInline: true,
                        preload: "auto",
                        "aria-label": "Vidéo de chargement G20 IOI",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "/motion_logo1.mp4",
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/app/welcome/page.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "/motion_logo1.webm",
                                type: "video/webm"
                            }, void 0, false, {
                                fileName: "[project]/app/welcome/page.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this),
                            "Votre navigateur ne supporte pas la lecture vidéo."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/welcome/page.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/welcome/page.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/welcome/page.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/welcome/page.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/welcome/page.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/welcome/page.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(Home, "gdWxdq1cYgy6XzC89Cu+c+o/vN0=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_dca958d2._.js.map