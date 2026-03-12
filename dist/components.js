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
  const circlePosition = Retool.useStateEnumeration({
    name: "Circle Position",
    initialValue: "Right",
    enumDefinition: ["Left", "Right"]
  });
  const [count, _setCount] = Retool.useStateNumber({
    name: "count",
    initialValue: 5
  });
  const clickEvent = Retool.useEventCallback({ name: "click" });
  var num = count > 99 ? "99+" : count;
  var isRight = circlePosition[0] === "Right";
  return /* @__PURE__ */ jsx("div", { onClick: () => clickEvent(), style: {
    position: "relative",
    height: "100%",
    // stretches to container height
    aspectRatio: "1 / 1",
    overflow: "hidden"
  }, children: /* @__PURE__ */ jsxs("div", { style: {
    position: "absolute",
    top: 0,
    left: 0,
    // defaults to left side
    width: "100%",
    height: "100%",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsx("img", { src: filename, alt: "Sample Image", style: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "contain"
    } }),
    /* @__PURE__ */ jsx("div", { style: {
      position: "absolute",
      top: 0,
      ...isRight ? { right: 0 } : { left: 0 },
      zIndex: 20,
      width: "25%",
      aspectRatio: "1 / 1",
      borderRadius: "50%",
      backgroundColor: circleColour,
      color: "white",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1rem"
    }, children: num })
  ] }) });
};
export {
  ImageIcon
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHJ5cmV0b29sLWN1c3RvbS1jb21wb25lbnQtY29sbGVjdGlvbnMtZ2xvYmFsOkB0cnlyZXRvb2wvY3VzdG9tLWNvbXBvbmVudC1zdXBwb3J0IiwgInJlYWN0LWpzeC1ydW50aW1lLWdsb2JhbDpyZWFjdC9qc3gtcnVudGltZSIsICIuLi9zcmMvaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcbiAgICAgICAgICBleHBvcnQgY29uc3QgeyBSZXRvb2wgfSA9IHdpbmRvdy5jY2Nfc3VwcG9ydF9SZXRvb2xDdXN0b21Db21wb25lbkNvbGxlY3Rpb25zO1xuICAgICAgICAiLCAiXG4gICAgICAgICAgZXhwb3J0IGNvbnN0IHsgRnJhZ21lbnQsIGpzeHMsIGpzeCwgZGVmYXVsdCB9ID0gd2luZG93LmNjY19zdXBwb3J0X1JlYWN0SlNYUnVudGltZTtcbiAgICAgICAgIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdHlwZSBGQyB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBSZXRvb2wgfSBmcm9tICdAdHJ5cmV0b29sL2N1c3RvbS1jb21wb25lbnQtc3VwcG9ydCdcblxuZXhwb3J0IGNvbnN0IEltYWdlSWNvbjogRkMgPSAoKSA9PiB7XG5cbiAgLy8gQ29tcG9uZW50IFZhcmlhYmxlc1xuICBjb25zdCBbbmFtZSwgX3NldE5hbWVdID0gUmV0b29sLnVzZVN0YXRlU3RyaW5nKHtcbiAgICBuYW1lOiAnbmFtZSdcbiAgfSlcbiAgY29uc3QgW2ZpbGVuYW1lLCBfc2V0RmlsZU5hbWVdID0gUmV0b29sLnVzZVN0YXRlU3RyaW5nKHtcbiAgICBuYW1lOiAnZmlsZW5hbWUnLFxuICAgIGluaXRpYWxWYWx1ZTogXCJodHRwczovL3B1cmVwbmcuY29tL3B1YmxpYy91cGxvYWRzL2xhcmdlL3B1cmVwbmcuY29tLW1lc3NhZ2VzLWljb25zeW1ib2xzaWNvbnNhcHBsZS1pb3Npb3Npb3MtOC1pY29uc2lvcy04LTcyMTUyMjU5NjA4MHpnbmU0LnBuZ1wiXG4gIH0pXG4gIGNvbnN0IFtjaXJjbGVDb2xvdXIsIF9zZXRDaXJjbGVDb2xvdXJdID0gUmV0b29sLnVzZVN0YXRlU3RyaW5nKHtcbiAgICBuYW1lOiAnY2lyY2xlIGhleCB2YWx1ZScsXG4gICAgaW5pdGlhbFZhbHVlOiBcIiNmZjRkNGRcIlxuXG4gIH0pXG4gIC8vIEFsbG9jYXRlcyBsb2NhdGlvbiBvZiBjaXJjbGUgdG8gY29ybmVyXG4gIGNvbnN0IGNpcmNsZVBvc2l0aW9uID0gUmV0b29sLnVzZVN0YXRlRW51bWVyYXRpb24oeyBcbiAgICBuYW1lOiAnQ2lyY2xlIFBvc2l0aW9uJyxcbiAgICBpbml0aWFsVmFsdWU6ICdSaWdodCcsXG4gICAgZW51bURlZmluaXRpb246IFsnTGVmdCcsICdSaWdodCddLFxuICB9KVxuXG4gIGNvbnN0IFtjb3VudCwgX3NldENvdW50XSA9IFJldG9vbC51c2VTdGF0ZU51bWJlcih7XG4gICAgbmFtZTogJ2NvdW50JyxcbiAgICBpbml0aWFsVmFsdWU6IDVcbiAgfSlcblxuXG4gIC8vIENsaWNrIEV2ZW50XG4gIGNvbnN0IGNsaWNrRXZlbnQgPSBSZXRvb2wudXNlRXZlbnRDYWxsYmFjayh7bmFtZTogXCJjbGlja1wifSlcblxuICAvLyBDYXBzIHRoZSB1cHBlciBkaXNsYXkgbnVtYmVyIGF0IDk5XG4gIHZhciBudW0gPSBjb3VudCA+IDk5ID8gXCI5OStcIiA6IGNvdW50XG4gIFxuICB2YXIgaXNSaWdodCA9IChjaXJjbGVQb3NpdGlvblswXSA9PT0gJ1JpZ2h0JylcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNsaWNrRXZlbnQoKX0gc3R5bGU9e3tcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLCAgICAgICAgLy8gc3RyZXRjaGVzIHRvIGNvbnRhaW5lciBoZWlnaHRcbiAgICAgIGFzcGVjdFJhdGlvOiBcIjEgLyAxXCIsIFxuICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgfX0+XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIHRvcDogMCwgbGVmdDogMCwgLy8gZGVmYXVsdHMgdG8gbGVmdCBzaWRlXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICB9fT5cbiAgICAgICAgPGltZyBzcmM9e2ZpbGVuYW1lfSBhbHQ9XCJTYW1wbGUgSW1hZ2VcIiBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICBvYmplY3RGaXQ6IFwiY29udGFpblwiLFxuICAgICAgICB9fSAvPlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgLi4uKGlzUmlnaHQgPyB7IHJpZ2h0OiAwIH0gOiB7IGxlZnQ6IDAgfSksXG4gICAgICAgICAgekluZGV4OiAyMCxcbiAgICAgICAgICB3aWR0aDogXCIyNSVcIixcbiAgICAgICAgICBhc3BlY3RSYXRpbzogXCIxIC8gMVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNpcmNsZUNvbG91cixcbiAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgZm9udFNpemU6IFwiMXJlbVwiLFxuICAgICAgICB9fT5cbiAgICAgICAgIHtudW19XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiAgKVxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFDaUIsSUFBTSxFQUFFLE9BQU8sSUFBSSxPQUFPOzs7QUNBMUIsSUFBTSxFQUFFLFVBQVUsTUFBTSxLQUFLLFNBQUFBLFNBQVEsSUFBSSxPQUFPOzs7QUNLMUQsSUFBTSxZQUFnQixNQUFNO0FBR2pDLFFBQU0sQ0FBQyxNQUFNLFFBQVEsSUFBSSxPQUFPLGVBQWU7QUFBQSxJQUM3QyxNQUFNO0FBQUEsRUFDUixDQUFDO0FBQ0QsUUFBTSxDQUFDLFVBQVUsWUFBWSxJQUFJLE9BQU8sZUFBZTtBQUFBLElBQ3JELE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxFQUNoQixDQUFDO0FBQ0QsUUFBTSxDQUFDLGNBQWMsZ0JBQWdCLElBQUksT0FBTyxlQUFlO0FBQUEsSUFDN0QsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLEVBRWhCLENBQUM7QUFFRCxRQUFNLGlCQUFpQixPQUFPLG9CQUFvQjtBQUFBLElBQ2hELE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxJQUNkLGdCQUFnQixDQUFDLFFBQVEsT0FBTztBQUFBLEVBQ2xDLENBQUM7QUFFRCxRQUFNLENBQUMsT0FBTyxTQUFTLElBQUksT0FBTyxlQUFlO0FBQUEsSUFDL0MsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLEVBQ2hCLENBQUM7QUFJRCxRQUFNLGFBQWEsT0FBTyxpQkFBaUIsRUFBQyxNQUFNLFFBQU8sQ0FBQztBQUcxRCxNQUFJLE1BQU0sUUFBUSxLQUFLLFFBQVE7QUFFL0IsTUFBSSxVQUFXLGVBQWUsQ0FBQyxNQUFNO0FBR3JDLFNBQ0Usb0JBQUMsU0FBSSxTQUFTLE1BQU0sV0FBVyxHQUFHLE9BQU87QUFBQSxJQUN2QyxVQUFVO0FBQUEsSUFDVixRQUFRO0FBQUE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxFQUNaLEdBQ0UsK0JBQUMsU0FBSSxPQUFPO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixLQUFLO0FBQUEsSUFBRyxNQUFNO0FBQUE7QUFBQSxJQUNkLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxFQUNaLEdBQ0U7QUFBQSx3QkFBQyxTQUFJLEtBQUssVUFBVSxLQUFJLGdCQUFlLE9BQU87QUFBQSxNQUM1QyxTQUFTO0FBQUEsTUFDVCxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsSUFDYixHQUFHO0FBQUEsSUFFTCxvQkFBQyxTQUFJLE9BQU87QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLEdBQUksVUFBVSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0FBQUEsTUFDdkMsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLE1BQ2IsY0FBYztBQUFBLE1BQ2QsaUJBQWlCO0FBQUEsTUFDakIsT0FBTztBQUFBLE1BQ1AsWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsTUFDaEIsVUFBVTtBQUFBLElBQ1osR0FDRSxlQUNKO0FBQUEsS0FDSixHQUNGO0FBRUE7IiwKICAibmFtZXMiOiBbImRlZmF1bHQiXQp9Cg==
