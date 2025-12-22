import React from "react";
import "./Variable.css";

export default function Variable() {
    return (
        <div className="variable-container">
            <div className="variable-content">
                <div className="variable-title">
                    Кто обычно приходит к нам на программу <br /> "Путь через перемены"?
                </div>
                <div className="variable-cards">
                    <div className="variable-card">
                        <div className="card-bg-number">30%</div>
                        <div className="card-main-title">Собственники</div>
                        <div className="card-main-text">
                            Собственникам бизнеса и топ-менеджерам, которые поддерживают все изменения в компании
                        </div>
                    </div>
                    <div className="variable-card">
                        <div className="card-bg-number">50%</div>
                        <div className="card-main-title">Руководители</div>
                        <div className="card-main-text">
                            Собственникам бизнеса и топ-менеджерам, которые поддерживают все изменения в компании
                        </div>
                    </div>
                    <div className="variable-card">
                        <div className="card-bg-number">20%</div>
                        <div className="card-main-title">HR</div>
                        <div className="card-main-text">
                            Собственникам бизнеса и топ-менеджерам, которые поддерживают все изменения в компании
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}