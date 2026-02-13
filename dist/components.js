// tryretool-custom-component-collections-global:@tryretool/custom-component-support
var { Retool } = window.ccc_support_RetoolCustomComponenCollections;

// react-jsx-runtime-global:react/jsx-runtime
var { Fragment, jsxs, jsx, default: default2 } = window.ccc_support_ReactJSXRuntime;

// src/index.tsx
var HelloWorld = () => {
  const [name, _setName] = Retool.useStateString({
    name: "name"
  });
  const [filename, _setFileName] = Retool.useStateString({
    name: "filename"
  });
  const [circleColour, _setCircleColour] = Retool.useStateString({
    name: "circle hex value",
    initialValue: "#ff4d4d"
  });
  const [count, _setCount] = Retool.useStateNumber({
    name: "count",
    initialValue: 5
  });
  return /* @__PURE__ */ jsx("div", { style: { aspectRatio: "1 / 1" }, children: /* @__PURE__ */ jsxs("div", { style: {
    // Containing image to container
    width: "100%",
    height: "100%",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsx("img", { src: filename, alt: "Sample Image", style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "contain",
      zIndex: 10
    } }),
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          aspectRatio: "1 / 1",
          width: "30%",
          height: "30%",
          borderRadius: "50%",
          backgroundColor: circleColour,
          // color of the circle
          color: "white",
          // text color
          fontWeight: "bold",
          fontSize: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "0.2em",
          right: "0.2em",
          // distance from top edge
          zIndex: 20
        },
        children: count
      }
    )
  ] }) });
};
export {
  HelloWorld
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHJ5cmV0b29sLWN1c3RvbS1jb21wb25lbnQtY29sbGVjdGlvbnMtZ2xvYmFsOkB0cnlyZXRvb2wvY3VzdG9tLWNvbXBvbmVudC1zdXBwb3J0IiwgInJlYWN0LWpzeC1ydW50aW1lLWdsb2JhbDpyZWFjdC9qc3gtcnVudGltZSIsICIuLi9zcmMvaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcbiAgICAgICAgICBleHBvcnQgY29uc3QgeyBSZXRvb2wgfSA9IHdpbmRvdy5jY2Nfc3VwcG9ydF9SZXRvb2xDdXN0b21Db21wb25lbkNvbGxlY3Rpb25zO1xuICAgICAgICAiLCAiXG4gICAgICAgICAgZXhwb3J0IGNvbnN0IHsgRnJhZ21lbnQsIGpzeHMsIGpzeCwgZGVmYXVsdCB9ID0gd2luZG93LmNjY19zdXBwb3J0X1JlYWN0SlNYUnVudGltZTtcbiAgICAgICAgIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdHlwZSBGQyB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBSZXRvb2wgfSBmcm9tICdAdHJ5cmV0b29sL2N1c3RvbS1jb21wb25lbnQtc3VwcG9ydCdcblxuZXhwb3J0IGNvbnN0IEhlbGxvV29ybGQ6IEZDID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgX3NldE5hbWVdID0gUmV0b29sLnVzZVN0YXRlU3RyaW5nKHtcbiAgICBuYW1lOiAnbmFtZSdcbiAgfSlcbiAgY29uc3QgW2ZpbGVuYW1lLCBfc2V0RmlsZU5hbWVdID0gUmV0b29sLnVzZVN0YXRlU3RyaW5nKHtcbiAgICBuYW1lOiAnZmlsZW5hbWUnXG5cbiAgfSlcbiAgY29uc3QgW2NpcmNsZUNvbG91ciwgX3NldENpcmNsZUNvbG91cl0gPSBSZXRvb2wudXNlU3RhdGVTdHJpbmcoe1xuICAgIG5hbWU6ICdjaXJjbGUgaGV4IHZhbHVlJyxcbiAgICBpbml0aWFsVmFsdWU6IFwiI2ZmNGQ0ZFwiXG5cbiAgfSlcbiAgY29uc3QgW2NvdW50LCBfc2V0Q291bnRdID0gUmV0b29sLnVzZVN0YXRlTnVtYmVyKHtcbiAgICBuYW1lOiAnY291bnQnLFxuICAgIGluaXRpYWxWYWx1ZTogNVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e2FzcGVjdFJhdGlvOiBcIjEgLyAxXCJ9fT5cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgLy8gQ29udGFpbmluZyBpbWFnZSB0byBjb250YWluZXJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgIH19PlxuICAgICAgICA8aW1nIHNyYz17ZmlsZW5hbWV9IGFsdD1cIlNhbXBsZSBJbWFnZVwiIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICBvYmplY3RGaXQ6IFwiY29udGFpblwiLFxuICAgICAgICAgIHpJbmRleDogMTBcbiAgICAgICAgfX0+PC9pbWc+XG4gICAgICBcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbzogXCIxIC8gMVwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMzAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMzAlXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNpcmNsZUNvbG91ciwgICAgIC8vIGNvbG9yIG9mIHRoZSBjaXJjbGVcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsICAgICAgICAgICAgICAgICAvLyB0ZXh0IGNvbG9yXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHRvcDogXCIwLjJlbVwiLFxuICAgICAgICAgICAgcmlnaHQ6IFwiMC4yZW1cIiwgICAgICAgICAgICAgICAgICAgIC8vIGRpc3RhbmNlIGZyb20gdG9wIGVkZ2VcbiAgICAgICAgICAgIHpJbmRleDogMjBcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgIHtjb3VudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNpQixJQUFNLEVBQUUsT0FBTyxJQUFJLE9BQU87OztBQ0ExQixJQUFNLEVBQUUsVUFBVSxNQUFNLEtBQUssU0FBQUEsU0FBUSxJQUFJLE9BQU87OztBQ0sxRCxJQUFNLGFBQWlCLE1BQU07QUFDbEMsUUFBTSxDQUFDLE1BQU0sUUFBUSxJQUFJLE9BQU8sZUFBZTtBQUFBLElBQzdDLE1BQU07QUFBQSxFQUNSLENBQUM7QUFDRCxRQUFNLENBQUMsVUFBVSxZQUFZLElBQUksT0FBTyxlQUFlO0FBQUEsSUFDckQsTUFBTTtBQUFBLEVBRVIsQ0FBQztBQUNELFFBQU0sQ0FBQyxjQUFjLGdCQUFnQixJQUFJLE9BQU8sZUFBZTtBQUFBLElBQzdELE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxFQUVoQixDQUFDO0FBQ0QsUUFBTSxDQUFDLE9BQU8sU0FBUyxJQUFJLE9BQU8sZUFBZTtBQUFBLElBQy9DLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxFQUNoQixDQUFDO0FBRUQsU0FDRSxvQkFBQyxTQUFJLE9BQU8sRUFBQyxhQUFhLFFBQU8sR0FDL0IsK0JBQUMsU0FBSSxPQUFPO0FBQUE7QUFBQSxJQUVWLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxFQUNaLEdBQ0U7QUFBQSx3QkFBQyxTQUFJLEtBQUssVUFBVSxLQUFJLGdCQUFlLE9BQU87QUFBQSxNQUM1QyxVQUFVO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsTUFDWCxRQUFRO0FBQUEsSUFDVixHQUFHO0FBQUEsSUFFSDtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsT0FBTztBQUFBLFVBQ0wsYUFBYTtBQUFBLFVBQ2IsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFVBQ1IsY0FBYztBQUFBLFVBQ2QsaUJBQWlCO0FBQUE7QUFBQSxVQUNqQixPQUFPO0FBQUE7QUFBQSxVQUNQLFlBQVk7QUFBQSxVQUNaLFVBQVU7QUFBQSxVQUNWLFNBQVM7QUFBQSxVQUNULFlBQVk7QUFBQSxVQUNaLGdCQUFnQjtBQUFBLFVBQ2hCLFVBQVU7QUFBQSxVQUNWLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQTtBQUFBLFVBQ1AsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUVEO0FBQUE7QUFBQSxJQUNEO0FBQUEsS0FDRixHQUNGO0FBRUo7IiwKICAibmFtZXMiOiBbImRlZmF1bHQiXQp9Cg==
