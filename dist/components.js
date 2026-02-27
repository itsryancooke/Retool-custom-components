// tryretool-custom-component-collections-global:@tryretool/custom-component-support
var { Retool } = window.ccc_support_RetoolCustomComponenCollections;

// react-jsx-runtime-global:react/jsx-runtime
var { Fragment, jsxs, jsx, default: default2 } = window.ccc_support_ReactJSXRuntime;

// src/index.tsx
var ImageIcon = () => {
  const [name, _setName] = Retool.useStateString({
    name: "name"
  });
  const [filename, _setFileName] = Retool.useStateString({
    name: "filename",
    initialValue: "https://purepng.com/public/uploads/large/purepng.com-messages-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596080zgne4.png"
  });
  const [circleColour, _setCircleColour] = Retool.useStateString({
    name: "circle hex value",
    initialValue: "#ff4d4d"
  });
  const [count, _setCount] = Retool.useStateNumber({
    name: "count",
    initialValue: 5
  });
  const clickEvent = Retool.useEventCallback({ name: "click" });
  return /* @__PURE__ */ jsx("div", { onClick: () => clickEvent(), style: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
    alignItems: "center"
  }, children: /* @__PURE__ */ jsxs("div", { style: {
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
      overflow: "hidden",
      zIndex: 10
    } }),
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          width: "20%",
          height: "30%",
          borderRadius: "50%",
          backgroundColor: circleColour,
          // color of the circle
          color: "white",
          // text color
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          overflow: "hidden",
          top: 0,
          right: "10%",
          zIndex: 20
        },
        children: /* @__PURE__ */ jsx("div", { style: {
          aspectRatio: "1 / 1",
          fontSize: "1.5em"
        }, children: count })
      }
    )
  ] }) });
};
export {
  ImageIcon
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHJ5cmV0b29sLWN1c3RvbS1jb21wb25lbnQtY29sbGVjdGlvbnMtZ2xvYmFsOkB0cnlyZXRvb2wvY3VzdG9tLWNvbXBvbmVudC1zdXBwb3J0IiwgInJlYWN0LWpzeC1ydW50aW1lLWdsb2JhbDpyZWFjdC9qc3gtcnVudGltZSIsICIuLi9zcmMvaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcbiAgICAgICAgICBleHBvcnQgY29uc3QgeyBSZXRvb2wgfSA9IHdpbmRvdy5jY2Nfc3VwcG9ydF9SZXRvb2xDdXN0b21Db21wb25lbkNvbGxlY3Rpb25zO1xuICAgICAgICAiLCAiXG4gICAgICAgICAgZXhwb3J0IGNvbnN0IHsgRnJhZ21lbnQsIGpzeHMsIGpzeCwgZGVmYXVsdCB9ID0gd2luZG93LmNjY19zdXBwb3J0X1JlYWN0SlNYUnVudGltZTtcbiAgICAgICAgIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdHlwZSBGQyB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBSZXRvb2wgfSBmcm9tICdAdHJ5cmV0b29sL2N1c3RvbS1jb21wb25lbnQtc3VwcG9ydCdcblxuZXhwb3J0IGNvbnN0IEltYWdlSWNvbjogRkMgPSAoKSA9PiB7XG5cbiAgLy8gQ29tcG9uZW50IFZhcmlhYmxlc1xuICBjb25zdCBbbmFtZSwgX3NldE5hbWVdID0gUmV0b29sLnVzZVN0YXRlU3RyaW5nKHtcbiAgICBuYW1lOiAnbmFtZSdcbiAgfSlcbiAgY29uc3QgW2ZpbGVuYW1lLCBfc2V0RmlsZU5hbWVdID0gUmV0b29sLnVzZVN0YXRlU3RyaW5nKHtcbiAgICBuYW1lOiAnZmlsZW5hbWUnLFxuICAgIGluaXRpYWxWYWx1ZTogXCJodHRwczovL3B1cmVwbmcuY29tL3B1YmxpYy91cGxvYWRzL2xhcmdlL3B1cmVwbmcuY29tLW1lc3NhZ2VzLWljb25zeW1ib2xzaWNvbnNhcHBsZS1pb3Npb3Npb3MtOC1pY29uc2lvcy04LTcyMTUyMjU5NjA4MHpnbmU0LnBuZ1wiXG4gIH0pXG4gIGNvbnN0IFtjaXJjbGVDb2xvdXIsIF9zZXRDaXJjbGVDb2xvdXJdID0gUmV0b29sLnVzZVN0YXRlU3RyaW5nKHtcbiAgICBuYW1lOiAnY2lyY2xlIGhleCB2YWx1ZScsXG4gICAgaW5pdGlhbFZhbHVlOiBcIiNmZjRkNGRcIlxuXG4gIH0pXG4gIGNvbnN0IFtjb3VudCwgX3NldENvdW50XSA9IFJldG9vbC51c2VTdGF0ZU51bWJlcih7XG4gICAgbmFtZTogJ2NvdW50JyxcbiAgICBpbml0aWFsVmFsdWU6IDVcbiAgfSlcbiAgLy8gQ2xpY2sgRXZlbnRcbiAgY29uc3QgY2xpY2tFdmVudCA9IFJldG9vbC51c2VFdmVudENhbGxiYWNrKHtuYW1lOiBcImNsaWNrXCJ9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrID0geygpID0+IGNsaWNrRXZlbnQoKX0gc3R5bGU9e3tcbiAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgfX0+XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIC8vIENvbnRhaW5pbmcgaW1hZ2UgdG8gY29udGFpbmVyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICB9fT5cbiAgICAgICAgPGltZyBzcmM9e2ZpbGVuYW1lfSAgYWx0PVwiU2FtcGxlIEltYWdlXCIgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgIG9iamVjdEZpdDogXCJjb250YWluXCIsXG4gICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgekluZGV4OiAxMFxuICAgICAgICB9fT48L2ltZz5cbiAgICAgIFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjIwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjMwJVwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjaXJjbGVDb2xvdXIsICAgICAvLyBjb2xvciBvZiB0aGUgY2lyY2xlXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLCAgICAgICAgICAgICAgICAgLy8gdGV4dCBjb2xvclxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHJpZ2h0OiBcIjEwJVwiLCAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB6SW5kZXg6IDIwXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgYXNwZWN0UmF0aW86IFwiMSAvIDFcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuNWVtXCIsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICB7Y291bnR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQ2lCLElBQU0sRUFBRSxPQUFPLElBQUksT0FBTzs7O0FDQTFCLElBQU0sRUFBRSxVQUFVLE1BQU0sS0FBSyxTQUFBQSxTQUFRLElBQUksT0FBTzs7O0FDSzFELElBQU0sWUFBZ0IsTUFBTTtBQUdqQyxRQUFNLENBQUMsTUFBTSxRQUFRLElBQUksT0FBTyxlQUFlO0FBQUEsSUFDN0MsTUFBTTtBQUFBLEVBQ1IsQ0FBQztBQUNELFFBQU0sQ0FBQyxVQUFVLFlBQVksSUFBSSxPQUFPLGVBQWU7QUFBQSxJQUNyRCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsRUFDaEIsQ0FBQztBQUNELFFBQU0sQ0FBQyxjQUFjLGdCQUFnQixJQUFJLE9BQU8sZUFBZTtBQUFBLElBQzdELE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxFQUVoQixDQUFDO0FBQ0QsUUFBTSxDQUFDLE9BQU8sU0FBUyxJQUFJLE9BQU8sZUFBZTtBQUFBLElBQy9DLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxFQUNoQixDQUFDO0FBRUQsUUFBTSxhQUFhLE9BQU8saUJBQWlCLEVBQUMsTUFBTSxRQUFPLENBQUM7QUFFMUQsU0FDRSxvQkFBQyxTQUFJLFNBQVcsTUFBTSxXQUFXLEdBQUcsT0FBTztBQUFBLElBQ3pDLFVBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLFlBQVk7QUFBQSxFQUNkLEdBQ0UsK0JBQUMsU0FBSSxPQUFPO0FBQUE7QUFBQSxJQUVWLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxFQUNaLEdBQ0U7QUFBQSx3QkFBQyxTQUFJLEtBQUssVUFBVyxLQUFJLGdCQUFlLE9BQU87QUFBQSxNQUM3QyxVQUFVO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixRQUFRO0FBQUEsSUFDVixHQUFHO0FBQUEsSUFFSDtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsT0FBTztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFVBQ1IsY0FBYztBQUFBLFVBQ2QsaUJBQWlCO0FBQUE7QUFBQSxVQUNqQixPQUFPO0FBQUE7QUFBQSxVQUNQLFlBQVk7QUFBQSxVQUNaLFNBQVM7QUFBQSxVQUNULFlBQVk7QUFBQSxVQUNaLGdCQUFnQjtBQUFBLFVBQ2hCLFVBQVU7QUFBQSxVQUNWLFVBQVU7QUFBQSxVQUNWLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQSw4QkFBQyxTQUFJLE9BQU87QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxRQUNaLEdBQ0csaUJBQ0g7QUFBQTtBQUFBLElBQ0Y7QUFBQSxLQUNGLEdBQ0Y7QUFFSjsiLAogICJuYW1lcyI6IFsiZGVmYXVsdCJdCn0K
