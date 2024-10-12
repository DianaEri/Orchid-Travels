<h2>Date of departure</h2>
<div className="date-selects">
  <div className="custom-select" onClick={() => toggleDropdown('day')}>
    <div className="selected">
      {selectedDay}
      <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
    </div>
    {dropdownOpen.day && (
      <div className="options">
        {Array.from({ length: 31 }, (_, i) => (
          <div key={i + 1} className="option" onClick={() => handleOptionClick('day', String(i + 1).padStart(2, '0'))}>
            {String(i + 1).padStart(2, '0')}
          </div>
        ))}
      </div>
    )}
  </div>

  <div className="custom-select" onClick={() => toggleDropdown('month')}>
    <div className="selected">
      {selectedMonth}
      <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
    </div>
    {dropdownOpen.month && (
      <div className="options">
        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
          .map((month, index) => (
            <div key={month} className="option" onClick={() => handleOptionClick('month', month)}>
              {month}
            </div>
          ))}
      </div>
    )}
  </div>

  <div className="custom-select" onClick={() => toggleDropdown('year')}>
    <div className="selected">
      {selectedYear}
      <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
    </div>
    {dropdownOpen.year && (
      <div className="options">
        {['2024', '2025', '2026'].map((year) => (
          <div key={year} className="option" onClick={() => handleOptionClick('year', year)}>
            {year}
          </div>
        ))}
      </div>
    )}
  </div>
</div>
