import "./checkbox.css";

const CheckBox = () => {
  return (
    <div class="checkbox-wrapper">
      <input id="terms-checkbox-37" name="checkbox" type="checkbox" />
      <label class="terms-label" for="terms-checkbox-37">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 200 200"
          class="checkbox-svg"
        >
          <mask fill="white" id="path-1-inside-1_476_5-37">
            <rect height="200" width="200"></rect>
          </mask>
          <rect
            mask="url(#path-1-inside-1_476_5-37)"
            stroke-width="40"
            class="checkbox-box"
            height="200"
            width="200"
          ></rect>
          <path
            stroke-width="15"
            d="M52 111.018L76.9867 136L149 64"
            class="checkbox-tick"
          ></path>
        </svg>
        <span class="label-text">Quiero recibir un recordatorio de mi cita</span>
      </label>
    </div>
  );
};

export default CheckBox;
