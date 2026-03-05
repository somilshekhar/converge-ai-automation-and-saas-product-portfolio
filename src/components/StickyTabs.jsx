import React, { Children, isValidElement } from "react";
import styles from "./StickyTabs.module.css";

const StickyTabItem = ({ title, id, children, contentClassName = "" }) => {
    return null; // This is a placeholder component used just to pass props
};

const StickyTabs = ({ children, mainNavHeight = "6rem" }) => {
    const stickyHeaderStyle = { top: 0 };

    return (
        <div className={styles.rootContainer}>
            {Children.map(children, (child) => {
                // Must be a valid element, but since we are not exporting the StickyTabItem individually,
                // we'll explicitly check its functional name or just assume it's valid if children exist.
                if (!isValidElement(child)) {
                    return null;
                }

                const { title, id, children: itemContent, contentClassName } = child.props;

                return (
                    <section key={id} className={styles.sectionContainer}>
                        <div
                            className={styles.stickyHeaderContainer}
                            style={stickyHeaderStyle}
                        >
                            <div className={styles.headerContentWrapper}>
                                <div className={styles.headerContentLayout}>
                                    <div className={styles.headerTitleWrap}>
                                        <h2 className={styles.title}>{title}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.contentLayout} ${contentClassName || ""}`}>
                            {itemContent}
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

StickyTabs.Item = StickyTabItem;

export default StickyTabs;
